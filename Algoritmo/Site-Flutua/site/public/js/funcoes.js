function escolhaEstrelas(estrela) {
   if (estrela == 5){ 
   
    document.getElementById("s1").src = "assets/images/star1.png";
    document.getElementById("s2").src = "assets/images/star1.png";
    document.getElementById("s3").src = "assets/images/star1.png";
    document.getElementById("s4").src = "assets/images/star1.png";
    document.getElementById("s5").src = "assets/images/star1.png";
    avaliacao = 5;
    } 
    
    //ESTRELA 4
   if (estrela == 4){ 
    
    document.getElementById("s1").src = "assets/images/star1.png";
    document.getElementById("s2").src = "assets/images/star1.png";
    document.getElementById("s3").src = "assets/images/star1.png";
    document.getElementById("s4").src = "assets/images/star1.png";
    document.getElementById("s5").src = "assets/images/star.png";
    avaliacao = 4;
    } 

   //ESTRELA 3
   if (estrela == 3){ 
   
    document.getElementById("s1").src = "assets/images/star1.png";
    document.getElementById("s2").src = "assets/images/star1.png";
    document.getElementById("s3").src = "assets/images/star1.png";
    document.getElementById("s4").src = "assets/images/star.png";
    document.getElementById("s5").src = "assets/images/star.png";
    avaliacao = 3;
    } 
    
   //ESTRELA 2
   if (estrela == 2){ 
    
    document.getElementById("s1").src = "assets/images/star1.png";
    document.getElementById("s2").src = "assets/images/star1.png";
    document.getElementById("s3").src = "assets/images/star.png";
    document.getElementById("s4").src = "assets/images/star.png";
    document.getElementById("s5").src = "assets/images/star.png";
    avaliacao = 2;
    } 
    
    //ESTRELA 1
   if (estrela == 1){ 
    document.getElementById("s1").src = "assets/images/star1.png";
    document.getElementById("s2").src = "assets/images/star.png";
    document.getElementById("s3").src = "assets/images/star.png";
    document.getElementById("s4").src = "assets/images/star.png";
    document.getElementById("s5").src = "assets/images/star.png";
    avaliacao = 1;
    } 
   }