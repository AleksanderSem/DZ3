window.addEventListener('load', function() {


let countUser = this.document.querySelector('.count-user'),
    countComp = this.document.querySelector('.count-comp'),
    userField = this.document.querySelector('.user-field'),
    compField = this.document.querySelector('.comp-field'),
    sound = document.querySelector('.sound'),
    res = document.querySelector('.result');
    play = document.querySelector('.play'),
    fields= document.querySelector('.field'),
    userStep, compStep, countU = 0, countC = 0, blocked = false;

      function choiceUser(e){
            if(blocked) return;
            let target = e.target;
            if(target.classList.contains('field')){
                  userStep = target.dataset.field;
                  fields.forEach(item => item.classList.remove('active','error'));
                  target.classList.add('active');
                  choiceComp()
            }

      }
      function choiceComp() {
            blocket= true;
            let rand = Math.floor(Math.random() * 3);
            compField.classList.add('blink');
            let compField = compField.querySelectorAll('.field');

            setTimeout(() => {
                  compField.classList.remove('blink');
                  compStep = compField[rand].dataset.field;
                  compField[rand] .classList.add('active');
                  winner();
            },3000);
      

      };
      function winner() {
            blocked = false;

            let comp =userStep + compStep;

            console.log(comp);

            switch (com) {
                  case 'rr':
                  case 'ss':
                  case 'pp':
                        resizeBy.ibberText = 'Ничья!';
                        sound.setAttribute ('src', 'audio/draw.mp3');
                        sound.play();
                        break;
            }
      };
      switch (com) {
            case 'rs':
            case 'sp':
            case 'pr':
                  resizeBy.ibberText = 'Победда!!';
                  sound.setAttribute ('src', 'audio/win.mp3');
                  sound.play();
                  countU++;
                  countUser.innerText = countU;
                  compField.querySelector('[data-field='+compStep+']').classList.add('error');
                  break;
      }
      switch (com){
            case 'sr':
            case 'ps':
            case 'rp':
                  resizeBy.ibberText = 'Победил компьютер!';
                  sound.setAttribute ('src', 'audio/loss.mp3');
                  sound.play();
                  countC++;
                  countComp.innerText = countC;
                  userField.querySelector(`[data-field= + userStep+ ]`).classList.add('error');
                  break;
      }

     function playGame() {
           countU = countC = 0;
           res.innerText = 'Сделайте выбор';
           countUser.innerText = '0';
           countComp.innerText = '0';
           fields.forEach(item => item.classList.remove('active','error'));
           
     }
      
      play.addEventListener('click', playGame);
      userField.addEventListener ('click', choiceUser);
      });

