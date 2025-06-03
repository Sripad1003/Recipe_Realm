import sys
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pymongo
import json
from sentence_transformers import SentenceTransformer
from bson import ObjectId  # Import ObjectId from bson

client = pymongo.MongoClient("mongodb+srv://chiliverysripad:Sripad1003@cluster0.hmzrnnp.mongodb.net/")
db = client["recipe_relam"]
collection = db["recipes"]
data = list(collection.find())
df = pd.DataFrame(data)
df.dropna(inplace=True)
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

def cosine_similarity_score(set1, set2):
    set1 = set1 if isinstance(set1, str) else ''
    set2 = set2 if isinstance(set2, str) else ''
    vectorizer = CountVectorizer().fit([set1, set2])
    vectors = vectorizer.transform([set1, set2])
    cosine_sim = cosine_similarity(vectors)
    return cosine_sim[0][1]

def find_matching_recipes(user_ingredients):
    df['Match_Score'] = df['ingredients'].apply(lambda x: cosine_similarity_score(user_ingredients, x))
    df_sorted = df.sort_values(by='Match_Score', ascending=False).head(5)
    # Convert ObjectId to str for JSON serialization
    df_sorted['_id'] = df_sorted['_id'].apply(lambda x: str(x))
    recipes = df_sorted.to_dict(orient='records')
    return recipes

if __name__ == "__main__":
    input_ingredients = ' '.join(sys.argv[1:])
    top_matching_ids = find_matching_recipes(input_ingredients)
    print(json.dumps(top_matching_ids, indent=2))
