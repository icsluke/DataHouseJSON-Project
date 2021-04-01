let dataFile = require('./data.json');

let totalTeamInt = 0;
let avgTeamInt = 0;
let totalTeamStr = 0;
let avgTeamStr = 0;
let totalTeamEnd = 0;
let avgTeamEnd = 0;
let totalTeamSFT = 0;
let avgTeamSFT = 0;
let compatibililty = 0;

const fs = require('fs');

var scoredApplicantOutput = {};
scoredApplicantOutput.scoredApplicants = [];

for (let i = 0; i<dataFile.team.length; i++) {
   totalTeamInt += dataFile.team[i].attributes.intelligence;
   totalTeamStr += dataFile.team[i].attributes.strength;
   totalTeamEnd += dataFile.team[i].attributes.endurance;
   totalTeamSFT += dataFile.team[i].attributes.spicyFoodTolerance;
}

avgTeamInt = totalTeamInt / dataFile.team.length;
avgTeamStr = totalTeamStr / dataFile.team.length;
avgTeamEnd = totalTeamEnd / dataFile.team.length;
avgTeamSFT = totalTeamSFT / dataFile.team.length;

for(let i=0; i<dataFile.applicants.length; i++) {
    if (Math.abs(avgTeamInt - dataFile.applicants[i].attributes.intelligence) > 8 ) {
        compatibililty += .05;
    } else if (Math.abs(avgTeamInt - dataFile.applicants[i].attributes.intelligence) > 6) {
        compatibililty += .1;
    } else if (Math.abs(avgTeamInt - dataFile.applicants[i].attributes.intelligence) > 4) {
        compatibililty += .15;
    } else if (Math.abs(avgTeamInt - dataFile.applicants[i].attributes.intelligence) > 2) {
        compatibililty += .2;
    } else if (Math.abs(avgTeamInt - dataFile.applicants[i].attributes.intelligence) > 0) {
        compatibililty += .25;
    } else {
        compatibililty += 0;
    }

    if (Math.abs(avgTeamStr - dataFile.applicants[i].attributes.strength) > 8 ) {
        compatibililty += .05;
    } else if (Math.abs(avgTeamStr - dataFile.applicants[i].attributes.strength) > 6) {
        compatibililty += .1;
    } else if (Math.abs(avgTeamStr - dataFile.applicants[i].attributes.strength) > 4) {
        compatibililty += .15;
    } else if (Math.abs(avgTeamStr - dataFile.applicants[i].attributes.strength) > 2) {
        compatibililty += .2;
    } else if (Math.abs(avgTeamStr - dataFile.applicants[i].attributes.strength) > 0) {
        compatibililty += .25;
    } else {
        compatibililty += 0;
    }

    if (Math.abs(avgTeamEnd - dataFile.applicants[i].attributes.endurance) > 8 ) {
        compatibililty += .05;
    } else if (Math.abs(avgTeamEnd - dataFile.applicants[i].attributes.endurance) > 6) {
        compatibililty += .1;
    } else if (Math.abs(avgTeamEnd - dataFile.applicants[i].attributes.endurance) > 4) {
        compatibililty += .15;
    } else if (Math.abs(avgTeamEnd - dataFile.applicants[i].attributes.endurance) > 2) {
        compatibililty += .2;
    } else if (Math.abs(avgTeamEnd - dataFile.applicants[i].attributes.endurance) > 0) {
        compatibililty += .25;
    } else {
        compatibililty += 0;
    }

    if (Math.abs(avgTeamSFT - dataFile.applicants[i].attributes.spicyFoodTolerance) > 8 ) {
        compatibililty += .05;
    } else if (Math.abs(avgTeamSFT - dataFile.applicants[i].attributes.spicyFoodTolerance) > 6) {
        compatibililty += .1;
    } else if (Math.abs(avgTeamSFT - dataFile.applicants[i].attributes.spicyFoodTolerance) > 4) {
        compatibililty += .15;
    } else if (Math.abs(avgTeamSFT - dataFile.applicants[i].attributes.spicyFoodTolerance) > 2) {
        compatibililty += .2;
    } else if (Math.abs(avgTeamSFT - dataFile.applicants[i].attributes.spicyFoodTolerance) > 0) {
        compatibililty += .25;
    } else {
        compatibililty += 0;
    }

    scoredApplicantOutput.scoredApplicants.push({name: dataFile.applicants[i].name, score: compatibililty.toFixed(2)});
    
    let jsonString = JSON.stringify(scoredApplicantOutput, null, 2);
    
    fs.writeFileSync('./output.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });
    
    compatibililty = 0;

}

fs.readFile('output.json', 'utf-8',(err, data) => {
    if (err) {
        throw err;
    } else {
        console.log("These are the compatibillity scores of the applicants.")
        console.log("The score is calculated by comparing how close the difference between the applicant and the team average attributes are.");
        const compatibilityScores = JSON.parse(data.toString());
        console.log(compatibilityScores);
        console.log("This information is printed from ./output.json");
    }
});
