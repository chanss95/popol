const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.close_btn');

const modalA = document.querySelector('.modalA');
const modalOpenA = document.querySelector('.modal_btnA');
const modalCloseA = document.querySelector('.close_btnA');

const modalB = document.querySelector('.modalB');
const modalOpenB = document.querySelector('.modal_btnB');
const modalCloseB = document.querySelector('.close_btnB');

const modalC = document.querySelector('.modalC');
const modalOpenC = document.querySelector('.modal_btnC');
const modalCloseC = document.querySelector('.close_btnC');


//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
    //display 속성을 block로 변경
    modal.style.display = 'block';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
   //display 속성을 none으로 변경
    modal.style.display = 'none';
});

modalOpenA.addEventListener('click',function(){
    modalA.style.display = 'block';
});
modalCloseA.addEventListener('click',function(){
    modalA.style.display = 'none';
});

modalOpenB.addEventListener('click',function(){ 
    modalB.style.display = 'block';
});
modalCloseB.addEventListener('click',function(){
    modalB.style.display = 'none';
});

modalOpenC.addEventListener('click',function(){
    modalC.style.display = 'block';
});
modalCloseC.addEventListener('click',function(){
    modalC.style.display = 'none';
});