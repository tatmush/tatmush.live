body {
	background-image: url('under_water4.jpeg');
	background-size: cover; /* Resize the background image to cover the entire container */
	background: rgb(25,42,121);
	background: linear-gradient(0deg, rgba(25,42,121,1) 19%, rgba(34,193,195,1) 85%); 

}

#background-wrap {
    bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
}

/* KEYFRAMES */

@-webkit-keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -50%;
    }
}

@-moz-keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -50%;
    }
}

@keyframes animateBubble {
    0% {
        top: 400px;

    }
    100% {
        top: 25%;

    }
}

@-webkit-keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@-moz-keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@-webkit-keyframes upAndDown { 
    0% { 
        margin-top:0px;
    }
    100% { 
        margin-top:50px;
    }
}

@-moz-keyframes upAndDown { 
    0% { 
        margin-top:0px;
    }
    100% { 
        margin-top:50px;
    }
}

@keyframes upAndDown { 
    0% { 
        margin-top:0px;
    }
    100% { 
        margin-top:50px;
    }
}

/* ANIMATIONS */

.x1 {
    -webkit-animation: animateBubble 5s linear, sideWays 2s ease-in-out infinite alternate, upAndDown 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 5s linear, sideWays 2s ease-in-out infinite alternate, upAndDown 2s ease-in-out infinite alternate;
	animation: animateBubble 5s linear, sideWays 2s ease-in-out infinite alternate, upAndDown 2s ease-in-out infinite alternate;
	
	left: -5%;
	top: 25%;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);

	justify-content: center;
	display: flex;
	align-items: center;
	font-family: "Comic Sans MS, Comic";
	font-size: xx-large;
}

.x2 {
    -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
    
    left: 5%;
    top: 80%;
    
    -webkit-transform: scale(0.4);
    -moz-transform: scale(0.4);
    transform: scale(0.4);
}


/* OBJECTS */

.bubble {
    -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	
    height: 200px;
	position: absolute;
	width: 200px;
	color: white;
}

.bubble:after {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	
    height: 180px;
	left: 10px;
	position: absolute;
	width: 180px;
}
