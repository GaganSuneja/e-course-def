const moduleModel = require("../models/Module");
const metadata = require("../metadata/metadataMap");
const fs = require('fs');
const setMetaData =  () => {
    const modules = JSON.parse(fs.readFileSync(`${__dirname}/../_data/modules.json`, 'utf-8'));
    const ratingQuestions = JSON.parse(fs.readFileSync(`${__dirname}/../_data/rating.json`, 'utf-8'));
    const mcqQuestions = JSON.parse(fs.readFileSync(`${__dirname}/../_data/mcq.json`, 'utf-8'));
    const trueFalseQuestions = JSON.parse(fs.readFileSync(`${__dirname}/../_data/trueFalse.json`, 'utf-8'));
    const fillInBlankQuestions = JSON.parse(fs.readFileSync(`${__dirname}/../_data/fillInBlank.json`, 'utf-8'));
    
    
    metadata.modulesArray = modules;
    metadata.ratingQuestions = ratingQuestions;
    metadata.mcqQuestions = mcqQuestions;
    metadata.trueFalseQuestions = trueFalseQuestions;
    metadata.fillInBlankQuestions = fillInBlankQuestions;
    metadata.minimumPassPercent = process.env.MINIMUM_PASS_PERECENT;
};

module.exports = setMetaData;

