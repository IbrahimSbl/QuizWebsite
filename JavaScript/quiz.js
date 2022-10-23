
class watch{
        //get references to the classes then loop over them to set on click listener
        constructor(){
                var mathC = document.getElementsByClassName("Math");
                var chemC = document.getElementsByClassName("Chemistry");
                var boilC = document.getElementsByClassName("Boilogy");
                var flagsC = document.getElementsByClassName("Flag");
                var QQC = document.getElementsByClassName("QQ");
                var i =0;
                for(i=0;i<mathC.length;i++){
                        mathC[i].onclick = function(){ 
                                sessionStorage.setItem("math",1);
                                sessionStorage.setItem("Chemistry",0);
                                sessionStorage.setItem("Flags",0);
                                sessionStorage.setItem("Boilogy",0);
                                sessionStorage.setItem("QQ",0);
                                console.log("pressed");
                        };
                }
                for(i=0;i<chemC.length;i++){
                        chemC[i].onclick = function(){ 
                                sessionStorage.setItem("Chemistry",1);
                                sessionStorage.setItem("math",0);
                                sessionStorage.setItem("Flags",0);
                                sessionStorage.setItem("Boilogy",0);
                                sessionStorage.setItem("QQ",0);
                        };
                }
                for(i=0;i<flagsC.length;i++){
                        flagsC[i].onclick = function(){ 
                                sessionStorage.setItem("math",0);
                                sessionStorage.setItem("Chemistry",0);
                                sessionStorage.setItem("Flags",1);
                                sessionStorage.setItem("Boilogy",0);
                                sessionStorage.setItem("QQ",0);
                        };
                }
                for(i=0;i<boilC.length;i++){
                        boilC[i].onclick = function(){
                                sessionStorage.setItem("math",0);
                                sessionStorage.setItem("Chemistry",0);
                                sessionStorage.setItem("Flags",0);
                                sessionStorage.setItem("Boilogy",1);
                                sessionStorage.setItem("QQ",0);
                        };
                }
                for(i=0;i<QQC.length;i++){
                        QQC[i].onclick = function(){
                                sessionStorage.setItem("math",0);
                                sessionStorage.setItem("Chemistry",0);
                                sessionStorage.setItem("Flags",0);
                                sessionStorage.setItem("Boilogy",0);
                                sessionStorage.setItem("QQ",1);
                        };
                }
        }
}
class view{
        //to know the windaw where we are 
        //if we were at Quiz.html and the user had chose a topic don't show him the topics
        constructor(){
                var location = window.location.href.split("/");
                if(location[location.length - 1] == "Quiz.html"){
                        if(sessionStorage.getItem("math") != 0 || sessionStorage.getItem("Chemistry") != 0 || sessionStorage.getItem("Flags") != 0 || sessionStorage.getItem("Boilogy") != 0 || sessionStorage.getItem("QQ") != 0){
                                document.getElementById("quizes").style.display = "none";
                        }
                        else{
                                document.getElementById("quizes").style.display = "flex";

                        }
                }
        }
}
new watch();
new view();