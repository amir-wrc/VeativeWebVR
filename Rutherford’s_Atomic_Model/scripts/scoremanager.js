///////////     By: Pankaj Verma
///////         Last Updated: 24/07/19 03:20
//---------------------------------------------------
var question_count=2,score=0;function addScore(e,t){if(e<100){score+=getScore(t),document.querySelector(l_scoreId).setAttribute("text","value","Score : ".concat(score));let o=GetQuestionInfo(e);o.uScore=getScore(t),o.qId="Q".concat(e),addScoreData(o),e==question_count&&saveScoreToLocalDB()}}function getPercent(){return(score/question_count*100).toFixed(0)}function getScore(e){switch(e){case 1:return 1;case 2:case 3:case 4:return 0}}function GetQuestionInfo(e){let t=new questionInfo;return t.lId="AS",t.lName="Assess your knowledge",t.lKnowledgeDom="Conceptual Knowledge",t.lType="Experiment Setup",t.lInteractivity="Perform Experiment",t.qType="Multiple Choice Question",t.qActionVerb="Identify",t.cognitiveDom="Analyze",t}function questionInfo(){this.lId="",this.lName="",this.lKnowledgeDom="",this.lType="",this.lInteractivity="",this.qId="",this.qType="",this.qActionVerb="",this.cognitiveDom="",this.uScore=0}
