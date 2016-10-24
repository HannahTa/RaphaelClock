window.onload = function ()
{	
	var paper = new Raphael(0, 0, 1000, 600);
	var backGround = paper.rect(0, 0, 1000, 600);
	backGround.attr({fill: "#fbfbfb"});
	
	//{ #StartOf Front View - wrist decoration
	var sideBand1 = paper.path("M 433 165 l -2 -1 l -2 0 l -2 1 l -3 4 l -39 70 l 51 0 l 0 -74");
	sideBand1.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var sideBand2 = sideBand1.clone();
	sideBand2.transform("S -1, 1");
	sideBand2.translate(-177, 0);
	
	var sideBand3 = sideBand1.clone();
	sideBand3.rotate(180, 500, 300);
	
	var sideBand4 = sideBand2.clone();
	sideBand4.rotate(180, 498, 300);
	
	var wristBand1 = paper.rect(463, 156, 72, 35);
	var wristBand2 = paper.rect(463, 126, 72, 30);
	var wristBand3 = paper.rect(463, 111, 72, 15);
	
	var leftSmallBand1 = paper.rect(433, 174, 30, 35);
	var rightSmallBand1 = paper.rect(535, 174, 30, 35);
	var leftSmallBand2 = paper.rect(433, 142, 30, 32);
	var rightSmallBand2 = paper.rect(535, 142, 30, 32);
	var leftSmallBand3 = paper.rect(433, 112, 30, 30);
	var rightSmallBand3 = paper.rect(535, 112, 30, 30);
	
	var topBandSet = paper.set(wristBand1, wristBand2, wristBand3, leftSmallBand1, leftSmallBand2, leftSmallBand3,
		rightSmallBand1, rightSmallBand2, rightSmallBand3);
	topBandSet.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var botBandSet = topBandSet.clone();
	botBandSet.rotate(180, 500, 300);
	
	var watchBackSet = paper.set(sideBand1, sideBand2, sideBand3, sideBand4, topBandSet, botBandSet);
	
	//} 
	// #EndOf Front View - wrist dectoration
	
	//{ #StartOf Front View - buttons
	/* Side Buttons */
	var setStartStopButton = paper.path("M 595 245 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	setStartStopButton.rotate(65);
	setStartStopButton.attr({fill: "#0d0d0d", stroke: "#1a1a1a"});
	
	var setSplitButton = paper.path("M 595 340 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	setSplitButton.rotate(115);
	setSplitButton.attr({fill: "#0d0d0d", stroke: "#1a1a1a"});
	
	var modeButton = paper.path("M 355 340 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	modeButton.rotate(65);
	modeButton.attr({fill: "#0d0d0d", stroke: "#1a1a1a"});
	
	var resetOnOffButton = paper.path("M 355 245 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	resetOnOffButton.rotate(115);
	resetOnOffButton.attr({fill: "#0d0d0d", stroke: "#1a1a1a"});
	
	/* Winder Button */
	var winderStick = paper.rect(628, 292.5, 15, 15)
	winderStick.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var winderButTop = paper.path("M 636 300 l 0 -18 l 10 0 l 1 2 l 1 3 l 1 5 l 0 8 l -13.5 0");
	winderButTop.attr({fill: "#0d0d0d", stroke: "#1a1a1a"});
	var winderButTopArrow = paper.path("M 638.5 293 l 4 -4 l 4 4");
	winderButTopArrow.attr({stroke: "white"});
	
	var winderButBot = paper.path("M 635.5 300 l 13.5 0 l 0 8 l -1 5 l -1 3 l -1 2 l -10 0 l 0 -18");
	winderButBot.attr({fill: "#0d0d0d", stroke: "#1a1a1a"});
	var winderButBotArrow = paper.path("M 638.5 308 l 4 4 l 4 -4");
	winderButBotArrow.attr({stroke: "white"});
	
	var winderButTopSet = paper.set(winderButTop, winderButTopArrow);
	var winderButBotSet = paper.set(winderButBot, winderButBotArrow);
	
	var watchButtonsSet = paper.set(setStartStopButton, setSplitButton, modeButton, resetOnOffButton, winderButBotSet, winderButTopSet);
	
	//}
	// #EndOf Front View - buttons
	
	//{ #StartOf Front View - face border
	var faceBorder = paper.circle(500, 300, 130);
	
	var faceZero = paper.path("M 500 182 l 6 -8 l -12 0 l 6 8");
	
	var faceTen = paper.text(500, 179, "10");
	faceTen.rotate(60, 500, 300);
	
	var faceTwenty = paper.text(500, 179, "20");
	faceTwenty.rotate(120, 500, 300);
	
	var faceThirty = paper.text(500, 179, "30");
	faceThirty.rotate(180, 500, 300);
	
	var faceForty = paper.text(500, 179, "40");
	faceForty.rotate(240, 500, 300);
	
	var faceFifty = paper.text(500, 179, "50");
	faceFifty.rotate(300, 500, 300);
	
	var backFaceSet = paper.set(faceBorder, faceZero, faceTen, faceTwenty, faceThirty, faceForty, faceFifty);
	backFaceSet.attr({'font-size': 12, fill: "white"});
	faceZero.attr({'font-size': 12, fill: "white", stroke: "#1a1a1a"});
	faceBorder.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var faceLine = paper.text(500, 177, "|");
	faceLine.attr({'font-size': 10, fill: "white", 'font-weight': 'bolder'})
	faceLine.rotate(30, 500, 300);
	backFaceSet.push(faceLine);
	
	for (var i = 1; i < 6; i++)
	{
		temp = faceLine.clone();
		temp.rotate((i*60), 500, 300);
		backFaceSet.push(temp);
	}
	
	var faceDot = paper.circle(500, 188, 0.5);
	faceDot.attr({fill: "white", stroke: "white"})
	faceDot.rotate(0, 500, 300);
	
	for (var i = 0; i < 60; i++)
	{
		temp = faceDot.clone();
		temp.rotate((i*6), 500, 300);
		backFaceSet.push(temp);
	}
	
	var watchBorderSet = paper.set(backFaceSet);
	
	//}
	// #EndOf Front View - face border
	
	//{ #StartOf Front View - watch face
	var face = paper.circle(500, 300, 109);
	face.attr({fill: "#333333", stroke: "#1a1a1a"});
	
	var digiFace = paper.path("M 462.5 237.5 l -25 25 l 0 75.5 l 25 25 l 75.5 0 l 25 -25 l 0 -75.5 l -25 -25 l -75.5 0");
	digiFace.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var modeFace = paper.rect(470, 283.5, 59, 35);
	modeFace.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	
	/* Mode Lights */
	var chronoText = paper.text(545, 288, "CHRONO");
	
	var alarmText = paper.text(543, 300, "ALARM");
	
	var timerText = paper.text(542, 312, "TIMER");
	
	var time2Text = paper.text(457, 288, "2 TIME");
	
	var otherText = paper.text(461, 300, "( /\\ )");
	
	var time1Text = paper.text(457, 312, "1 TIME");
	
	var modeTextSet = paper.set(chronoText, alarmText, timerText, time2Text, time1Text, otherText);
	modeTextSet.attr({'font-size': 6, fill: "#cccc00"});
	
	var chronoLight = paper.rect(521, 286.5, 5, 5);
	chronoLight.hide();
	
	var alarmLight = paper.rect(521, 297.5, 5, 5);
	alarmLight.hide();
	
	var timerLight = paper.rect(521, 309.5, 5, 5);
	timerLight.hide();
	
	var modeLightSet = paper.set(chronoLight, alarmLight, timerLight);
	modeLightSet.attr({fill: "#595959", stroke: "#4d4d4d"});
	
	/* Digits - Time and Mode display */
	var digit0 = paper.path("M 455 325 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var digit1 = paper.path("M 447 327 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit2 = paper.path("M 457 327 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit3 = paper.path("M 455 335 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var digit4 = paper.path("M 447 337 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit5 = paper.path("M 457 337 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit6 = paper.path("M 455 345 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	hourTenthSet = paper.set(digit0, digit1, digit2, digit3, digit4, digit5, digit6)
	hourTenthSet.attr({fill:"#cccccc", stroke: "#cccccc"});
	
	var hourUnitSet = hourTenthSet.clone();
	hourUnitSet.translate(15, 0);
	
	var minuteTenthSet = hourUnitSet.clone();
	minuteTenthSet.translate(25, 0);
	
	var minuteUnitSet = minuteTenthSet.clone();
	minuteUnitSet.translate(15, 0);
	
	var secondTenthSet = minuteUnitSet.clone();
	secondTenthSet.translate(25, 0);
	
	var secondUnitSet = secondTenthSet.clone();
	secondUnitSet.translate(15, 0);
	
	/* Digits - Day and Date display */
	var dateSet1 = minuteTenthSet.clone()
	dateSet1.translate(0, -70);
	
	var dateSet2 = minuteUnitSet.clone()
	dateSet2.translate(0, -70);
	
	var monthSet1 = secondTenthSet.clone();
	monthSet1.translate(0, -70);
	
	var monthSet2 = secondUnitSet.clone();
	monthSet2.translate(0, -70);
	
	var dayTest0 = paper.path("M 460 255 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var dayTest1 = paper.path("M 452 257 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest15 = dayTest1.clone();
	dayTest15.translate(5, 1);
	var dayTest2 = paper.path("M 462 257 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest3 = paper.path("M 460 265 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var dayTest4 = paper.path("M 452 267 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest45 = dayTest4.clone();
	dayTest45.translate(5, -1);
	var dayTest5 = paper.path("M 462 267 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest6 = paper.path("M 460 275 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	
	var dayTest7 = paper.path("M 461.5 277.75 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	dayTest7.rotate(-45);
	
	var daySet1 = paper.set(dayTest0, dayTest1, dayTest15, dayTest2, dayTest3, dayTest4, dayTest5, dayTest6);
	daySet2 = daySet1.clone();
	daySet1.push(dayTest45);
	daySet2.push(dayTest7);
	daySet1.attr({fill:"#cccccc", stroke: "#cccccc"});
	daySet2.attr({fill:"#cccccc", stroke: "#cccccc"});
	daySet2.translate(15, 0);
	
	/* Decorative Features */
	var timerDot1 = paper.rect(478.5, 330.5, 2, 2);
	timerDot1.attr({fill:"#cccccc", stroke: "#cccccc"});
	var timerDot2 = timerDot1.clone();
	timerDot2.translate(0, 10);
	var timerDot3 = timerDot1.clone();
	timerDot3.translate(40, 0);
	var timerDot4 = timerDot2.clone();
	timerDot4.translate(40, 0);
	var timerDot5 = timerDot4.clone();
	timerDot5.translate(0, -65.5);
	
	var decoSet = paper.set(timerDot1, timerDot2, timerDot3, timerDot4, timerDot5);
	
	var faceLine0 = paper.path("M 500 204 l 3 -3 l 0 -6 l -6 0 l 0 6 l 3 3");
	faceLine0.attr({fill: "white", stroke: "#b3b3b3"})
	decoSet.push(faceLine0);
	
	for (var i = 1; i < 4; i++)
	{
		temp = faceLine0.clone();
		temp.rotate((i*90), 500, 300);
		decoSet.push(temp);
	}
	
	var faceLine1 = paper.rect(499.75, 196, 0.5, 6);
	faceLine1.attr({fill: "#b3b3b3", stroke: "#b3b3b3"})
	faceLine1.rotate(6, 500, 300);
	decoSet.push(faceLine1);
	
	for (var i = 0; i < 59; i++)
	{
		if (i != 14 && i != 29 && i != 44)
		{
			temp = faceLine1.clone();
			temp.rotate((i*6), 500, 300);
			decoSet.push(temp);
		}
	}
	
	var faceLine2 = paper.path("M 500 215 l 3 -3 l 0 -16 l -6 0 l 0 16 l 3 3");
	faceLine2.rotate(30, 500, 300);
	faceLine2.attr({fill: "white", stroke: "#b3b3b3"})
	decoSet.push(faceLine2);
	
	for (var i = 1; i < 11; i++)
	{
		if (i != 2 && i != 5 && i != 8)
		{
			temp = faceLine2.clone();
			temp.rotate((i*30), 500, 300);
			decoSet.push(temp);
		}
	}
	
	var face12 = paper.text(499, 215, "12");
	face12.attr({'font-size': 20, fill: "white"});
	
	var face3 = paper.text(588, 300.5, "3");
	face3.attr({'font-size': 20, fill: "white"});
	
	var face6 = paper.text(500, 385.5, "6");
	face6.attr({'font-size': 20, fill: "white"});
	
	var face9 = paper.text(412, 300.5, "9");
	face9.attr({'font-size': 20, fill: "white"});
	
	decoSet.push(face12, face3, face6, face9);
	
	var madeArr = ["M ", "A", "D", "E", " ", "I", "N", " ", " ", " ", "R", "A", "P", "H", "A", "E", "L"];
	var tempRot = 20;
	
	for (var i = 0; i < madeArr.length; i++)
	{
		temp = paper.text(500, 391, madeArr[i]);
		temp.attr({'font-size': 4, fill: "white"});
		temp.rotate(tempRot, 500, 300);
		tempRot -= 2.5;
		decoSet.push(temp);
	}
	
	/* Button Text */
	var tNESet = paper.text(578, 267, "SET +");
	tNESet.rotate(-15);
	var tStart = paper.text(580, 276, "START");
	tStart.rotate(-15);
	var tStop = paper.text(584, 285, "STOP");
	tStop.rotate(-15);
	
	var tSESet = paper.text(583, 318, "SET -");
	tSESet.rotate(15);
	var tSplit = paper.text(580, 327, "SPLIT");
	tSplit.rotate(15);
	
	var tMode = paper.text(420, 323, "MODE");
	tMode.rotate(-15);
	
	var tReset = paper.text(423, 274, "RESET");
	tReset.rotate(15);
	var tOnOff = paper.text(421, 283, "ON - OFF");
	tOnOff.rotate(15);
	
	var tFaceSet = paper.set(tNESet, tStart, tStop, tSESet, tSplit, tMode, tReset, tOnOff);
	tFaceSet.attr({'font-size': 7, fill: "#b3b3b3"});
	
	
	/* Mode Text */
	var tCurrentMode = paper.text(500, 355, "DIGITAL MODE");
	tCurrentMode.attr({'font-size': 7, fill: "#b3b3b3"});
	
	/* Hands on watch */
	var hour = paper.path("M 500 300 l 5 0 l -3 -50 l -2 -2 l -2 2 l -3 50");
	var hoursButt = paper.path("M 500 300 l -5 0 l 2 15 l 6 0 l 2 -15");
	hour.attr({fill: "white", stroke: "#b3b3b3"});
	hoursButt.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	var hours = paper.set(hour, hoursButt);
	
	var minute = paper.path("M 500 300 l 4 0 l -2 -88 l -2 -2 l -2 2 l -2 88 ");
	var minutesButt = paper.path("M 500 300 l -4 0 l 1 20 l 6 0 l 1 -20");
	minute.attr({fill: "white", stroke: "#b3b3b3"});
	minutesButt.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	var minutes = paper.set(minute, minutesButt);
	
	var second = paper.path("M 500 300 l 2 0 l -2 -95 l -2 95 ");
	var secondsButt = paper.path("M 500 300 l -2 0 l 1 25 l 2 0 l 1 -25");
	second.attr({fill: "white", stroke: "#b3b3b3"});
	secondsButt.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	var seconds = paper.set(second, secondsButt);
	
	var centerPoint = paper.circle(500, 300, 5);
	centerPoint.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	
	var watchFaceSet = paper.set(face, digiFace, modeFace, modeTextSet, modeLightSet, hourTenthSet, hourUnitSet, minuteTenthSet, minuteUnitSet, 
	secondTenthSet, secondUnitSet, dateSet1, dateSet2, monthSet1, monthSet2, daySet1, daySet2, decoSet, tFaceSet, hours, minutes, seconds,
	centerPoint);
	//}
	// #EndOf Front View - watch face
	
	//{ #StartOf Right View and Left View 
		var rightWristBandSet = paper.set();
		//{Right wrsit band
		var rightMiddleBand1 = paper.rect(735.5, 160, 15, 26)
		rightMiddleBand1.attr({fill: "#0d0d0d"});
		rightMiddleBand1.rotate(8);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(19);
		rightMiddleBand1.translate(-5, -25);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(19);
		rightMiddleBand1.translate(-7, -30);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(25);
		rightMiddleBand1.translate(-7, -27);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(20);
		rightMiddleBand1.translate(-4, -27);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(10);
		rightMiddleBand1.translate(-2, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(30);
		rightMiddleBand1.translate(-6, -25);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(26);
		rightMiddleBand1.translate(-5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(15);
		rightMiddleBand1.translate(-3, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(7);
		rightMiddleBand1.translate(-1.5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(1);
		rightMiddleBand1.translate(-0.5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(-1);
		rightMiddleBand1.translate(0, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(0.5);
		rightMiddleBand1.translate(0, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(1);
		rightMiddleBand1.translate(0, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(0);
		rightMiddleBand1.translate(0, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(0.5);
		rightMiddleBand1.translate(0, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(0);
		rightMiddleBand1.translate(0, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(7);
		rightMiddleBand1.translate(-2, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(15);
		rightMiddleBand1.translate(-3.5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(20);
		rightMiddleBand1.translate(-6, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(25);
		rightMiddleBand1.translate(-5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(24);
		rightMiddleBand1.translate(-4, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(13);
		rightMiddleBand1.translate(-3.5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(30);
		rightMiddleBand1.translate(-8, -32);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(30);
		rightMiddleBand1.translate(-5.5, -28);
		rightMiddleBand1 = rightMiddleBand1.clone();
		rightMiddleBand1.rotate(13);
		rightMiddleBand1.translate(-3.5, -28);
		//}
		var rightWristBand1 = paper.path("M 734.5 180 l 0 15 l 0.5 3 l 1 2 l 2 1 l l 3 0.5 l 1 0 l 3 -0.5 l 2 -1 l 1 -2 l 0.5 -3 l 0 -15 l -0.5 -3 l -1 -2 l -2 -1 l -3 -0.5 l -1 0 l -3 0.5 l -2 1 l -1 2 l -0.5 3");
		rightWristBand1.attr({fill: "#262626", stroke: "#1a1a1a"});
		//{ Clone and movement of band
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(15);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(15);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(30);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(28);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(5);
		rightWristBand1.translate(-1, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(28);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(30);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(15);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(13);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(0);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(0);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(0);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(1);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(1);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(0);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(0);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(0);
		rightWristBand1.translate(0, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(15);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(15);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(30);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(28);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(5);
		rightWristBand1.translate(-1, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(28);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(30);
		rightWristBand1.translate(-8, -27);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(15);
		rightWristBand1.translate(-3, -28);
		rightWristBand1 = rightWristBand1.clone();
		rightWristBand1.rotate(13);
		rightWristBand1.translate(-3, -28);
		
		//}
														//722.5
		var leftWinderButton = paper.circle(255, 300, 19)
		leftWinderButton.attr({fill: "#0d0d0d", stroke: "black"});
		
		//{Left Wrist Band
		var leftMiddleBand1 = paper.rect(249.5, 160, 15, 26)
		leftMiddleBand1.attr({fill: "#0d0d0d"});
		leftMiddleBand1.rotate(-8);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-19);
		leftMiddleBand1.translate(5, -25);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-19);
		leftMiddleBand1.translate(7, -30);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-25);
		leftMiddleBand1.translate(7, -27);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-20);
		leftMiddleBand1.translate(4, -27);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-10);
		leftMiddleBand1.translate(2, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-30);
		leftMiddleBand1.translate(6, -25);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-26);
		leftMiddleBand1.translate(5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-15);
		leftMiddleBand1.translate(3, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-7);
		leftMiddleBand1.translate(1.5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-1);
		leftMiddleBand1.translate(0.5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(1);
		leftMiddleBand1.translate(0, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-0.5);
		leftMiddleBand1.translate(0, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-1);
		leftMiddleBand1.translate(0, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(0);
		leftMiddleBand1.translate(0, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-0.5);
		leftMiddleBand1.translate(0, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(0);
		leftMiddleBand1.translate(0, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-7);
		leftMiddleBand1.translate(2, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-15);
		leftMiddleBand1.translate(3.5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-20);
		leftMiddleBand1.translate(6, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-25);
		leftMiddleBand1.translate(5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-24);
		leftMiddleBand1.translate(4, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-13);
		leftMiddleBand1.translate(3.5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-30);
		leftMiddleBand1.translate(8, -32);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-30);
		leftMiddleBand1.translate(5.5, -28);
		leftMiddleBand1 = leftMiddleBand1.clone();
		leftMiddleBand1.rotate(-13);
		leftMiddleBand1.translate(3.5, -28);
		
		var leftWristBand1 = paper.path("M 251.5 180 l 0 15 l 0.5 3 l 1 2 l 2 1 l l 3 0.5 l 1 0 l 3 -0.5 l 2 -1 l 1 -2 l 0.5 -3 l 0 -15 l -0.5 -3 l -1 -2 l -2 -1 l -3 -0.5 l -1 0 l -3 0.5 l -2 1 l -1 2 l -0.5 3");
		leftWristBand1.attr({fill: "#262626", stroke: "#1a1a1a"});
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-15);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-15);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-30);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-28);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-5);
		leftWristBand1.translate(-1, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-28);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-30);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-15);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-13);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(0);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(0);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(0);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-1);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-1);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(0);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(0);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(0);
		leftWristBand1.translate(0, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-15);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-15);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-30);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-28);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-5);
		leftWristBand1.translate(1, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-28);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-30);
		leftWristBand1.translate(8, -27);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-15);
		leftWristBand1.translate(3, -28);
		leftWristBand1 = leftWristBand1.clone();
		leftWristBand1.rotate(-13);
		leftWristBand1.translate(3, -28);
		//}
		
		var rightBackFace = paper.path("M 720 171 l -5 3 l -3 5 l 0 243 l 3 5 l 5 3 l 10 0 l 3 -2 l 0 -255 l -3 -2 l -10.5 0");
		rightBackFace.attr({fill: "#262626", stroke: "#1a1a1a"});
		
		var rightSideBand1 = paper.path("M 750 218 l -4 -50 l -2 -3 l -2 -1 l -1 0 l -2 1 l -2 3 l -4 50 l 0 164 l 4 50 l 2 3 l 2 1 l 1 0 l 2 -1 l 2 -3 l 4 -50 l 0 -164");
		rightSideBand1.attr({fill: "#262626", stroke: "#1a1a1a"});
				
		var rightTopButton = paper.path("M 747 270.5 l -1 -40 l -2 -3 l -2 -1 l -1 0 l -2 1 l -2 3 l -1 40 l 1 2 l 2 1 l 5 0 l 2 -1 l 1 -2");
		rightTopButton.attr({fill: "#0d0d0d", stroke: "black"});
		
		var rightBotButton = rightTopButton.clone();
		rightBotButton.translate(0, 100);
		rightBotButton.rotate(180);
		
		var rightTopWinderButton = paper.path("M722.5,300 C722.5,273 762.5,273 762.5,300 l -40.5 0");
		rightTopWinderButton.attr({fill: "#0d0d0d", stroke: "black"});
		var winderRightTopArrow = paper.path("M 734 294 l 8 -8 l 8 8");
		winderRightTopArrow.attr({stroke: "white"});
		
		var rightTopWinderButtonSet = paper.set(rightTopWinderButton, winderRightTopArrow);
		rightBotWinderButtonSet = rightTopWinderButtonSet.clone();
		rightBotWinderButtonSet.translate(0.5, 20.5);
		rightBotWinderButtonSet.rotate(180);
		
		var leftBackFace = rightBackFace.clone();
		leftBackFace.rotate(180, 500, 300);
		
		var leftSideBand1 = rightSideBand1.clone();
		leftSideBand1.rotate(180, 500, 300);
		
		var leftBotButton = rightTopButton.clone();
		leftBotButton.rotate(180, 500, 300);
		
		var leftTopButton = rightTopButton.clone();
		leftTopButton.rotate(180, 500, 300);
		leftTopButton.rotate(180);
		leftTopButton.translate(0, -100);
		
		
	//}
	
	var watchSet = paper.set(watchFaceSet, watchBorderSet, watchButtonsSet, watchBackSet);
	
	/*var circle3D = paper.circle(50, 50, 50);
	circle3D.attr({fill: "#1a1a1a"});
	circle3D.click(function ()
	{
		//watchSet.scale(0.1, 1, 200, 300);
		watchSet.animate({'transform':"s0.5 1"}, 1000);
	});*/
	
	/*  */
	var secondsTick = 0;
	var minutesTick = 0;
	var hoursTick = 0;
	
	var digitalMode = true;
	var digitalH = 0;
	var digitalM = 0;
	var digitalS = 0;
	
	var chronoMode = false;
	var chronoBool = false;
	var chronoH = 0;
	var chronoM = 0;
	var chronoS = 0;
	
	var alarmMode = false;
	var alarmCheck = false;
	var alarmBool = false;
	var alarmHBool = true;
	var alarmMBool = false;
	var alarmSBool = false;
	var alarmHFlash = true;
	var alarmMFlash = false;
	var alarmSFlash = false;
	var alarmH = 0;
	var alarmM = 0;
	var alarmS = 0;
	
	var timerMode = false;
	var timerBool = false;
	var timerHBool = true;
	var timerMBool = false;
	var timerSBool = false;
	var timerHFlash = true;
	var timerMFlash = false;
	var timerSFlash = false;
	var timerH = 0;
	var timerM = 0;
	var timerS = 0;
	
	backFaceSet.click(function ()
	{
		backFaceSet.rotate(6, 500, 300);
	});
	
	//{ # StartOf Button Functions
	
	//{ # Winder Buttons
		winderButTopSet.click(function ()
	{
		winderTop();
	});
	
	rightTopWinderButtonSet.click(function ()
	{
		winderTop();
	});
	
	function winderTop()
	{
		if (alarmMode == true)
		{
			if (alarmBool == false)
			{
				if (alarmHBool == true)
				{
					alarmH++;
				}
				else if(alarmMBool == true)
				{
					alarmM++;
				}
				else if (alarmSBool == true)
				{
					alarmS++;
				}
			}
		}
		else if (timerMode == true)
		{
			if (timerBool == false) // Stop the timer from being changed while counting
			{
				if (timerHBool == true)
				{
					timerH++;
				}
				else if(timerMBool == true)
				{
					timerM++;
				}
				else if (timerSBool == true)
				{
					timerS++;
				}
			}
		}
		else if (digitalMode == true)
		{
			digitalM++;
		}
	}
	
	winderButBotSet.click(function ()
	{
		winderBot();
	});
	
	rightBotWinderButtonSet.click(function ()
	{
		winderBot();
	});
	
	function winderBot()
	{
		if (alarmMode == true)
		{
			if (alarmBool == false)
			{
				if (alarmHBool == true)
				{
					alarmH--;
				}
				else if(alarmMBool == true)
				{
					alarmM--;
				}
				else if (alarmSBool == true)
				{
					alarmS--;
				}
			}
		}
		else if (timerMode == true)
		{
			if (timerBool == false) // Stop the timer from being changed while counting
			{
				if (timerHBool == true)
				{
					timerH--;
				}
				else if(timerMBool == true)
				{
					timerM--;
				}
				else if (timerSBool == true)
				{
					timerS--;
				}
			}
		}
	}
	
	//}
	// # End of Winder Buttons
	
	resetOnOffButton.click(function ()
	{
		resetOnOff();
	});
	
	leftTopButton.click(function ()
	{
		resetOnOff();
	});
	
	function resetOnOff()
	{
		if (alarmMode == true)
		{
			if (alarmCheck == true)
			{
				alarmLight.hide();
				alarmBool = false;
				alarmCheck = false;
			}
			else if (alarmCheck == false)
			{
				alarmLight.show();
				alarmBool = true;
				alarmCheck = true;
			}
		}
		else if (chronoMode == true)
		{
			chronoH = 0;
			chronoM = 0;
			chronoS = 0;
			
			h = checkTime(chronoH);
			m = checkTime(chronoM);
			s = checkTime(chronoS);
			
			displayDigits(s, 1, secondUnitSet);
			displayDigits(s, 0, secondTenthSet);
			displayDigits(m, 1, minuteUnitSet);
			displayDigits(m, 0, minuteTenthSet);
			displayDigits(h, 1, hourUnitSet);
			displayDigits(h, 0, hourTenthSet);
		}
	}
	
	setStartStopButton.click(function ()
	{
		setStartStop();
	});
	
	rightTopButton.click(function ()
	{
		setStartStop();
	});
	
	function setStartStop()
	{
		if (chronoMode == true)
		{
			if (chronoBool == false)
			{
				chronoBool = true;
				chronoLight.show();
			}
			else 
			{
				chronoBool = false;
				chronoLight.hide();
			}
		}
		else if (timerMode == true)
		{
			if (timerBool == false)
			{
				timerBool = true;
				timerLight.show();
			}
			else 
			{
				timerBool = false;
				timerLight.hide();
			}
		}
	}
	
	setSplitButton.click(function ()
	{
		setSplit();
	});
	
	rightBotButton.click(function ()
	{
		setSplit();
	});
	
	function setSplit()
	{
		if (alarmMode == true)
		{
			if (alarmHBool == true)
			{
				alarmHBool = false;
				alarmMBool = true;
			}
			else if (alarmMBool == true)
			{
				alarmMBool = false;
				alarmSBool = true;
			}
			else if (alarmSBool == true)
			{
				alarmSBool = false;
				alarmHBool = true;
			}
		}
		else if (timerMode == true)
		{
			if (timerHBool == true)
			{
				timerHBool = false;
				timerMBool = true;
			}
			else if (timerMBool == true)
			{
				timerMBool = false;
				timerSBool = true;
			}
			else if (timerSBool == true)
			{
				timerSBool = false;
				timerHBool = true;
			}
		}
	}
	
	modeButton.click(function ()
	{
		modeButFunction();
	});
	
	leftBotButton.click(function ()
	{
		modeButFunction();
	});
	
	function modeButFunction()
	{
		if (digitalMode == true)
		{
			digitalMode = false;
			chronoMode = true; // Stop watch
			tCurrentMode.attr({text: "CHRONO MODE", fill:"#b3b3b3"});
		}
		else if (chronoMode == true)
		{
			chronoMode = false; // Stop watch
			alarmMode = true;
			tCurrentMode.attr({text: "ALARM MODE", fill:"#b3b3b3"});
		}
		else if (alarmMode == true)
		{
			alarmMode = false;
			timerMode = true;
			tCurrentMode.attr({text: "TIMER MODE", fill:"#b3b3b3"});
		}
		else if (timerMode == true)
		{
			timerMode = false;
			digitalMode = true;
			tCurrentMode.attr({text: "DIGITAL MODE", fill:"#b3b3b3"});
		}
	}
	
	//}
	// # EndOf Button Functions
	
	function startTime() 
	{
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var date = today.getDate();
		var month = today.getMonth() + 1; // getMonth starts at 0
		var day = today.getDay();
		
		secondsTick = (s * 6);
		minutesTick = (m * 6);
		hoursTick = 0.5 * (60 * h + m);
		
		seconds.animate({transform: ['r', secondsTick, 500, 300]});
		minutes.animate({transform: ['r', minutesTick, 500, 300]});
		hours.animate({transform: ['r', hoursTick, 500, 300]});
		
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		month = checkTime(month);
		date = checkTime(date);
		
		if (timerBool == true)
		{
			timerH = mod(timerH, 24);
			timerM = mod(timerM, 60);
			timerS = mod(timerS, 60);
			
			timerS--;
			if (timerS < 0)
			{
				timerM--;
				if (timerM < 0)
				{
					timerH--;
				}
			}
			
			if ((timerS == 0) && (timerM == 0) && (timerH == 0))
			{
				tCurrentMode.attr({text: "TIMER DONE", fill: "red"});
				timerBool = false;
				timerLight.hide();
			}
		}
		
		if (alarmCheck == true)
		{
			//Check alarm with current time
			h = today.getHours();
			m = today.getMinutes();
			s = today.getSeconds();
			
			h = checkTime(h);
			m = checkTime(m);
			s = checkTime(s);
			
			if ((alarmH == h) && (alarmM == m) && (alarmS == s))
			{
				// Alert here
				tCurrentMode.attr({text: "ALARM DONE", fill: "red"});
				alarmCheck == false;
				alarmLight.hide();
			}
		}
		
		if (chronoBool == true)
		{
			chronoS = mod(chronoS, 60);
			chronoM = mod(chronoM, 60);
			
			chronoS++;
			
			if (chronoS > 59)
			{
				chronoS = 0;
				chronoM++;
				
				if (chronoM > 59)
				{
					chronoM = 0;
					chronoH++;
				}
			}
		}
		
		/* Current mode */
		if (chronoMode == true)
		{	
			s = checkTime(chronoS);
			m = checkTime(chronoM);
			h = checkTime(chronoH);
			
			displayDigits(s, 1, secondUnitSet);
			displayDigits(s, 0, secondTenthSet);
			displayDigits(m, 1, minuteUnitSet);
			displayDigits(m, 0, minuteTenthSet);
			displayDigits(h, 1, hourUnitSet);
			displayDigits(h, 0, hourTenthSet);
		}
		else if (alarmMode == true)
		{
			alarmH = mod(alarmH, 24);
			alarmM = mod(alarmM, 60);
			alarmS = mod(alarmS, 60);
			h = checkTime(alarmH);
			m = checkTime(alarmM);
			s = checkTime(alarmS);
			if (alarmBool == false)
			{
				if (alarmHBool == true)
				{	
					if (alarmHFlash == true)
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						hideDigits(hourUnitSet);
						hideDigits(hourTenthSet);
						alarmHFlash = false;
					}
					else
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						alarmHFlash = true;
					}
				}
				else if (alarmMBool == true)
				{
					if (alarmMFlash == true)
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						hideDigits(minuteUnitSet);
						hideDigits(minuteTenthSet);
						alarmMFlash = false;
					}
					else
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						alarmMFlash = true;
					}
				}
				else if (alarmSBool == true)
				{
					if (alarmSFlash == true)
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						hideDigits(secondUnitSet);
						hideDigits(secondTenthSet);
						alarmSFlash = false;
					}
					else
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						alarmSFlash = true;
					}
				}
			}
		}
		else if (timerMode)
		{
			timerH = mod(timerH, 24);
			timerM = mod(timerM, 60);
			timerS = mod(timerS, 60);
			h = checkTime(timerH);
			m = checkTime(timerM);
			s = checkTime(timerS);
			if (timerBool == false)
			{
				if (timerHBool == true)
				{	
					if (timerHFlash == true)
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						hideDigits(hourUnitSet);
						hideDigits(hourTenthSet);
						timerHFlash = false;
					}
					else
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						timerHFlash = true;
					}
				}
				else if (timerMBool == true)
				{
					if (timerMFlash == true)
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						hideDigits(minuteUnitSet);
						hideDigits(minuteTenthSet);
						timerMFlash = false;
					}
					else
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						timerMFlash = true;
					}
				}
				else if (timerSBool == true)
				{
					if (timerSFlash == true)
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						hideDigits(secondUnitSet);
						hideDigits(secondTenthSet);
						timerSFlash = false;
					}
					else
					{
						displayDigits(s, 1, secondUnitSet);
						displayDigits(s, 0, secondTenthSet);
						displayDigits(m, 1, minuteUnitSet);
						displayDigits(m, 0, minuteTenthSet);
						displayDigits(h, 1, hourUnitSet);
						displayDigits(h, 0, hourTenthSet);
						timerSFlash = true;
					}
				}
			}
			else
			{
				displayDigits(s, 1, secondUnitSet);
				displayDigits(s, 0, secondTenthSet);
				displayDigits(m, 1, minuteUnitSet);
				displayDigits(m, 0, minuteTenthSet);
				displayDigits(h, 1, hourUnitSet);
				displayDigits(h, 0, hourTenthSet);
			}
			
		}
		else // Digital display of time
		{
			displayDigits(s, 1, secondUnitSet);
			displayDigits(s, 0, secondTenthSet);
			displayDigits(m, 1, minuteUnitSet);
			displayDigits(m, 0, minuteTenthSet);
			displayDigits(h, 1, hourUnitSet);
			displayDigits(h, 0, hourTenthSet);
		}
		
		/* Display Day and Month */
		dayCheck(day, daySet1, daySet2);
		displayDigits(date, 0, dateSet1);
		displayDigits(date, 1, dateSet2);
		displayDigits(month, 0, monthSet1);
		displayDigits(month, 1, monthSet2);
		
		// 1 Second delay and call self
		setTimeout(function(){startTime()}, 1000);
	}
	
	function hideDigits(set)
	{
		set[0].hide();
		set[1].hide();
		set[2].hide();
		set[3].hide();
		set[4].hide();
		set[5].hide();
		set[6].hide();
	}
	
	function displayDigits(digit, i, set)
	{
		switch(digit.toString().charAt(i))
		{
			case "0":
				set[0].show();
				set[1].show();
				set[2].show();
				set[3].hide();
				set[4].show();
				set[5].show();
				set[6].show();
				break;
			case "1":
				set[0].hide();
				set[1].hide();
				set[2].show();
				set[3].hide();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			case "2":
				set[0].show();
				set[1].hide();
				set[2].show();
				set[3].show();
				set[4].show();
				set[5].hide();
				set[6].show();
				break;
			case "3":
				set[0].show();
				set[1].hide();
				set[2].show();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].show();
				break;
			case "4":
				set[0].hide();
				set[1].show();
				set[2].show();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			case "5":
				set[0].show();
				set[1].show();
				set[2].hide();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].show();
				break;
			case "6":
				set[0].show();
				set[1].show();
				set[2].hide();
				set[3].show();
				set[4].show();
				set[5].show();
				set[6].show();
				break;
			case "7":
				set[0].show();
				set[1].hide();
				set[2].show();
				set[3].hide();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			case "9":
				set[0].show();
				set[1].show();
				set[2].show();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			default:
				set[0].show();
				set[1].show();
				set[2].show();
				set[3].show();
				set[4].show();
				set[5].show();
				set[6].show();
		}
	}
	
	function dayCheck(day, set1, set2)
	{
		switch(day)
		{	
			case 0: // Sunday
				set1[0].show();
				set1[1].show();
				set1[2].hide();
				set1[3].hide();
				set1[4].show();
				set1[5].hide();
				set1[6].show();
				set1[7].show();
				set1[8].hide();
				
				set2[0].hide();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].hide();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].hide();
				break;
			case 1: // Monday
				set1[0].show();
				set1[1].show();
				set1[2].show();
				set1[3].show();
				set1[4].hide();
				set1[5].show();
				set1[6].show();
				set1[7].hide();
				set1[8].hide();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].hide();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].hide();
				break;
			case 2: // Tuesday
				set1[0].show();
				set1[1].hide();
				set1[2].show();
				set1[3].hide();
				set1[4].hide();
				set1[5].hide();
				set1[6].hide();
				set1[7].hide();
				set1[8].show();
				
				set2[0].hide();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].hide();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].hide();
				break;
			case 3: // Wednesday
				set1[0].hide();
				set1[1].show();
				set1[2].hide();
				set1[3].show();
				set1[4].hide();
				set1[5].show();
				set1[6].show();
				set1[7].show();
				set1[8].show();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].hide();
				set2[4].show();
				set2[5].show();
				set2[6].hide();
				set2[7].show();
				set2[8].hide();
				break;
			case 4: // Thursday
				set1[0].show();
				set1[1].hide();
				set1[2].show();
				set1[3].hide();
				set1[4].hide();
				set1[5].hide();
				set1[6].hide();
				set1[7].hide();
				set1[8].show();
				
				set2[0].hide();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].show();
				set2[7].hide();
				set2[8].hide();
				break;
			case 5: // Friday
				set1[0].show();
				set1[1].show();
				set1[2].hide();
				set1[3].hide();
				set1[4].show();
				set1[5].show();
				set1[6].hide();
				set1[7].hide();
				set1[8].hide();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].hide();
				set2[7].hide();
				set2[8].show();
				break;
			case 6: // Saturday
				set1[0].show();
				set1[1].show();
				set1[2].hide();
				set1[3].hide();
				set1[4].show();
				set1[5].hide();
				set1[6].show();
				set1[7].show();
				set1[8].hide();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].show();
				set2[7].hide();
				set2[8].hide();
				break;
			default:
				set1[0].show();
				set1[1].show();
				set1[2].show();
				set1[3].show();
				set1[4].show();
				set1[5].show();
				set1[6].show();
				set1[7].show();
				set1[8].show();
				
				set2[0].show();
				set2[1].show();
				set2[2].show();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].show();
		}
	}
	
	// http://javascript.about.com/od/problemsolving/a/modulobug.htm
	// http://stackoverflow.com/questions/4467539/javascript-modulo-not-behaving
	// Modulo function which effect negative numbers
	function mod(l, p)
	{
		return ((l % p) + p)% p;
	}
	
	function checkTime(i) 
	{
		if (i < 10) // add zero in front of numbers < 10
		{
			i = '0' + i
		};
		return i;
	}
	
	startTime();
};



