var inputs = {
    "PS4":{
        "0=(2)":"(twice)",
        "1=(3)":"(three-times)",
        "2=(4)":"(four-times)",
        "3=(5)":"(five-times)",
                
        "3.1=1-Super":"(levelxone)",
        "3.2=3-Super":"(levelxthree)",
        
        "3.3=IAD":"(956|754)",
        "3.4=SJ":"(28)",//27|28|29
        "3.4=sj.":"(28)", //this one is not listed in the entry as is, assumed SJ
        "3.5=TK":"(2369|2147)",
        
        "3.6=214":"dp_down_to_left",
        "3.7=236":"dp_down_to_right",
        
        "3.8=dl":"(delay)",
        
        "4=DR":"r-one|square,triangle",
        "5=SD":"r-two|circle,cross",
        "6=A1":"l-one",
        "7=A2":"l-two",
        "8=Vanish":"triangle,circle",
        "9={Sparking}":"r-one,r-two|square,triangle,circle,cross",
        
        "10=dj.":"(dp_up_right)",//dp_up_left| 
        "11.1=jc":"(dp_up_right)",//dp_up_left|
        "11.2=j.":"(in-air)",
        "11.3=j":"(in-air)",
        "12=(Land)":"(land)",
        "12=Land":"(land)",
        
        "13=1":"dp_down_left",
        "14=2":"dpad_down",
        "15=3":"dp_down_right",
        "16=4":"dpad_left",
        "17=5":"",
        "18=6":"dpad_right",
        "19=7":"dp_up_left",
        "20=8":"dpad_up",
        "21=9":"dp_up_right",
        
        "21.1=[L]":"(hold)square",
        "21.2=[M]":"(hold)triangle",
        "21.3=[H]":"(hold)circle",
        "21.4=[S]":"(hold)cross",
        "21.5=]L[":"(release)square",
        "21.6=]M[":"(release)triangle",
        "21.7=]H[":"(release)circle",
        "21.8=]S[":"(release)cross",
        "22=L":"square",
        "23=M":"triangle",
        "24=H":"circle",
        "25=S":"cross"
    }
};

var mapping = {
    "PS4":{
        "+":" ",
        "&":"<br>",
        "|":" <p class='unifier'>OR</p> ",
        ",":" <p class='unifier'>AND</p> ",
        "~":" <p class='unifier'>(optional)</p> ",
        "r-one":"<img class='console-btn' src='images/PS4/PS4_R1.png'/>",
        "r-two":"<img class='console-btn' src='images/PS4/PS4_R2.png'/>",
        "l-one":"<img class='console-btn' src='images/PS4/PS4_L1.png'/>",
        "l-two":"<img class='console-btn' src='images/PS4/PS4_L2.png'/>",
        "square":"<img class='console-btn' src='images/PS4/PS4_Square.png'/>",
        "triangle":"<img class='console-btn' src='images/PS4/PS4_Triangle.png'/>",
        "circle":"<img class='console-btn' src='images/PS4/PS4_Circle.png'/>",
        "cross":"<img class='console-btn' src='images/PS4/PS4_Cross.png'/>",
        "dpad_up":"<img class='console-btn' src='images/PS4/PS4_Dpad_Up.png'/>",
        "dpad_left":"<img class='console-btn' src='images/PS4/PS4_Dpad_Left.png'/>",
        "dpad_right":"<img class='console-btn' src='images/PS4/PS4_Dpad_Right.png'/>",
        "dpad_down":"<img class='console-btn' src='images/PS4/PS4_Dpad_Down.png'/>",
        "dp_down_left":"<img class='console-btn' src='images/PS4/PS4_Dpad_Down_Left.png'/>",
        "dp_down_right":"<img class='console-btn' src='images/PS4/PS4_Dpad_Down_Right.png'/>",
        "dp_up_left":"<img class='console-btn' src='images/PS4/PS4_Dpad_Up_Left.png'/>",
        "dp_up_right":"<img class='console-btn' src='images/PS4/PS4_Dpad_Up_Right.png'/>",
        "dp_down_to_left":"<img class='console-btn' src='images/PS4/PS4_Dpad_Down_to_Left.png'/>",
        "dp_down_to_right":"<img class='console-btn' src='images/PS4/PS4_Dpad_Down_to_Right.png'/>",
        
        "(levelxone)":"<i class='fas fa-burn'></i> Level 1: <img class='console-btn' src='images/PS4/PS4_Dpad_Down_to_Right.png'/><img class='console-btn' src='images/PS4/PS4_R1.png'/>",
        "(levelxthree)":"<i class='fas fa-fire-alt'></i> Level 3: <img class='console-btn' src='images/PS4/PS4_Dpad_Down_to_Left.png'/><img class='console-btn' src='images/PS4/PS4_R2.png'/>"
    }
};