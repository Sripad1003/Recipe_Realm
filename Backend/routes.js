import Record from './model.js';
import searchrecipe from './routes/searchrecipe.js'
import express from 'express';
import { spawn } from 'child_process';
import { PythonShell } from 'python-shell';
import ingreds from './ingreds_model.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log("reached home");
    res.send("Home Page");
});

router.post('/generaterecipe', (req, res) => {
    const inputIngredients = req.body.ingreds;
    console.log(inputIngredients);

    const pythonProcess = spawn('python', ['sample.py', inputIngredients]);

    let scriptOutput = '';

    pythonProcess.stdout.on('data', (data) => {
        scriptOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).send({ error: 'Python script error' });
        }
        try {
            const jsonResponse = JSON.parse(scriptOutput);
            res.send(jsonResponse);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).send({ error: 'Invalid JSON response from Python script' });
        }
    });
});

router.post('/postdummy', (req, res) => {
    res.send(req.body.context);
});

router.get('/aboutus', (req, res) => {
    res.send("reached home");
});

router.get('/ingredients', async (req, res) => {
    try {
        const records = await ingreds.find();
        res.json(records);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Server error' });
    }
});

router.get('/records', async (req, res) => {
    try {
        const records = await Record.find();
        res.json(records);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/searchrecipe', searchrecipe);

export default router;
