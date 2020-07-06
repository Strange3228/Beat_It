$(document).ready(function(){
    let beat1 = document.getElementById("beat_1");
    let beat2 = document.getElementById("beat_2");
    let beat3 = document.getElementById("beat_3");
    let beat4 = document.getElementById("beat_4");
    let beat5 = document.getElementById("beat_5");
    let beat6 = document.getElementById("beat_6");
    let beat7 = document.getElementById("beat_7");
    let beat8 = document.getElementById("beat_8");
    let beat9 = document.getElementById("beat_9");
    let beat10 = document.getElementById("beat_10");
    let beat11 = document.getElementById("beat_11");
    let beat12 = document.getElementById("beat_12");
    let beat13 = document.getElementById("beat_13");
    let beat14 = document.getElementById("beat_14");
    let beat15 = document.getElementById("beat_15");

    let place1 = document.getElementById("place_for_music1");
    let place2 = document.getElementById("place_for_music2");
    let place3 = document.getElementById("place_for_music3");
    let place4 = document.getElementById("place_for_music4");
    let place5 = document.getElementById("place_for_music5");

    var beatInterval1 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval2 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval3 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval4 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval5 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval6 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval7 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval8 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval9 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval10 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval11 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval12 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval13 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval14 = setInterval(function(){console.log("tratatata");}, 100000);
    var beatInterval15 = setInterval(function(){console.log("tratatata");}, 100000);

    function playAudio(beat){
      if(beat === beat1){
        beatInterval1 = setInterval(function(){beat.play();}, 10)
      } else if (beat === beat2){
        beatInterval2 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat3){
        beatInterval3 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat4){
        beatInterval4 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat5){
        beatInterval5 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat6){
        beatInterval6 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat7){
        beatInterval7 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat8){
        beatInterval8 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat9){
        beatInterval9 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat10){
        beatInterval10 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat11){
        beatInterval11 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat12){
        beatInterval12 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat13){
        beatInterval13 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat14){
        beatInterval4 = setInterval(function(){beat.play();}, 10)
      }else if (beat === beat15){
        beatInterval15 = setInterval(function(){beat.play();}, 10)
      }
    }

    function stopAudio(beat){
      if(beat === document.getElementById("movable_div1")){
        clearInterval(beatInterval1);
      } else if (beat === document.getElementById("movable_div2")){
        clearInterval(beatInterval2);
      } else if (beat === document.getElementById("movable_div3")){
        clearInterval(beatInterval3);
      } else if (beat === document.getElementById("movable_div4")){
        clearInterval(beatInterval4);
      } else if (beat === document.getElementById("movable_div5")){
        clearInterval(beatInterval5);
      } else if (beat === document.getElementById("movable_div6")){
        clearInterval(beatInterval6);
      } else if (beat === document.getElementById("movable_div7")){
        clearInterval(beatInterval7);
      } else if (beat === document.getElementById("movable_div8")){
        clearInterval(beatInterval8);
      } else if (beat === document.getElementById("movable_div9")){
        clearInterval(beatInterval9);
      } else if (beat === document.getElementById("movable_div10")){
        clearInterval(beatInterval10);
      } else if (beat === document.getElementById("movable_div11")){
        clearInterval(beatInterval11);
      } else if (beat === document.getElementById("movable_div12")){
        clearInterval(beatInterval12);
      } else if (beat === document.getElementById("movable_div13")){
        clearInterval(beatInterval13);
      } else if (beat === document.getElementById("movable_div14")){
        clearInterval(beatInterval14);
      } else if (beat === document.getElementById("movable_div15")){
        clearInterval(beatInterval15);
      }
    }

    dragElement(document.getElementById("movable_div1"));
    dragElement(document.getElementById("movable_div2"));
    dragElement(document.getElementById("movable_div3"));
    dragElement(document.getElementById("movable_div4"));
    dragElement(document.getElementById("movable_div5"));
    dragElement(document.getElementById("movable_div6"));
    dragElement(document.getElementById("movable_div7"));
    dragElement(document.getElementById("movable_div8"));
    dragElement(document.getElementById("movable_div9"));
    dragElement(document.getElementById("movable_div10"));
    dragElement(document.getElementById("movable_div11"));
    dragElement(document.getElementById("movable_div12"));
    dragElement(document.getElementById("movable_div13"));
    dragElement(document.getElementById("movable_div14"));
    dragElement(document.getElementById("movable_div15"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        let start_place_top = elmnt.offsetTop;
        let start_place_left = elmnt.offsetLeft;
        if (document.getElementById(elmnt.id + "header")) {
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
          elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            
        }
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        function closeDragElement(){
            document.onmouseup = null;
            document.onmousemove = null;
            if((elmnt.offsetLeft < (place1.offsetLeft+15)) && (elmnt.offsetLeft > (place1.offsetLeft-15)) && (elmnt.offsetTop < (place1.offsetTop+15)) && (elmnt.offsetTop > (place1.offsetTop-15))){
              PlaySomeBeat(elmnt);
              elmnt.style.left = place1.offsetLeft + "px";
              elmnt.style.top = place1.offsetTop + "px";
            }

            else if((elmnt.offsetLeft < (place2.offsetLeft+15)) && (elmnt.offsetLeft > (place2.offsetLeft-15)) && (elmnt.offsetTop < (place2.offsetTop+15)) && (elmnt.offsetTop > (place2.offsetTop-15))){
              PlaySomeBeat(elmnt);
              elmnt.style.left = place2.offsetLeft + "px";
              elmnt.style.top = place2.offsetTop + "px";
            }

            else if((elmnt.offsetLeft < (place3.offsetLeft+15)) && (elmnt.offsetLeft > (place3.offsetLeft-15)) && (elmnt.offsetTop < (place3.offsetTop+15)) && (elmnt.offsetTop > (place3.offsetTop-15))){
              PlaySomeBeat(elmnt);
              elmnt.style.left = place3.offsetLeft + "px";
              elmnt.style.top = place3.offsetTop + "px";
            }

            else if((elmnt.offsetLeft < (place4.offsetLeft+15)) && (elmnt.offsetLeft > (place4.offsetLeft-15)) && (elmnt.offsetTop < (place4.offsetTop+15)) && (elmnt.offsetTop > (place4.offsetTop-15))){
              PlaySomeBeat(elmnt);
              elmnt.style.left = place4.offsetLeft + "px";
              elmnt.style.top = place4.offsetTop + "px";
            }

            else if((elmnt.offsetLeft < (place5.offsetLeft+15)) && (elmnt.offsetLeft > (place5.offsetLeft-15)) && (elmnt.offsetTop < (place5.offsetTop+15)) && (elmnt.offsetTop > (place5.offsetTop-15))){
              PlaySomeBeat(elmnt);
              elmnt.style.left = place5.offsetLeft + "px";
              elmnt.style.top = place5.offsetTop + "px";
            }

            else{
              stopAudio(elmnt);
              elmnt.style.left = start_place_left + "px";
              elmnt.style.top = start_place_top + "px";
            }
        }
        
    }
    function PlaySomeBeat(elmnt){
      if (elmnt === document.getElementById("movable_div1")){playAudio(beat1)}
      else if (elmnt === document.getElementById("movable_div2")){playAudio(beat2)}
      else if (elmnt === document.getElementById("movable_div3")){playAudio(beat3)}
      else if (elmnt === document.getElementById("movable_div4")){playAudio(beat4)}
      else if (elmnt === document.getElementById("movable_div5")){playAudio(beat5)}
      else if (elmnt === document.getElementById("movable_div6")){playAudio(beat6)}
      else if (elmnt === document.getElementById("movable_div7")){playAudio(beat7)}
      else if (elmnt === document.getElementById("movable_div8")){playAudio(beat8)}
      else if (elmnt === document.getElementById("movable_div9")){playAudio(beat9)}
      else if (elmnt === document.getElementById("movable_div10")){playAudio(beat10)}
      else if (elmnt === document.getElementById("movable_div11")){playAudio(beat11)}
      else if (elmnt === document.getElementById("movable_div12")){playAudio(beat12)}
      else if (elmnt === document.getElementById("movable_div13")){playAudio(beat13)}
      else if (elmnt === document.getElementById("movable_div14")){playAudio(beat14)}
      else if (elmnt === document.getElementById("movable_div15")){playAudio(beat15)};
    }
})