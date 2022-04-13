$(document).ready(function() {
    // timer변수를 만들어 약간의 딜레이를 줄건데 딜레이가 없으면 마우스가 지나갈 때마다
    // 메뉴바가 나오고 사라지고 해서 눈에 거슬림 
    var timer;
    $("#slide").mouseenter(function(){      //#slide에 mouseenter이벤트를 만듬
         timer = setTimeout(function() {       //딜레이를 설정하면서 (0.1초) 해당 시간 후에 아래와 같은 동작을 함 
            $("#panel").not(':animated')        //에니메이션이 Queue에 쌓이는 것을 방지하기 위해서  not(':animated')설정을 해준다.
            .css({color: "red"})                //css수정
            .slideDown(400)                     //display가 none에서 block으로 바뀌면서 슬라이드 효과가 생기면서 보여지게 됨
         }, 100);           
    })
    $("#menu").mouseleave(function(){       //#menu에 mouseleave이벤트를 만듬
         clearTimeout(timer);               //위에서 딜레이를 설정하고 그 시간 안에 mouseleave 이벤트가 일어나면 해당 timer변수가 사라져서
         $("#panel")                        //mouseenter이벤트 시의 동작이 일어나지 않음
         .css({color: "blue"})              //css수정
         .slideUp(400)                      //display가 none에서 block으로 바뀌면서 슬라이드 효과가 생기면서 보여지게 됨
    });
});

// 스크롤

const btnrec = document.querySelector('.rec');
    const sectionrec = document.querySelector('#rec');
    btnrec.addEventListener('click', function() {
        sectionrec.scrollIntoView({behavior:"smooth", block:"center"})
    })
    const btnhot = document.querySelector('.hot');
    const sectionhot = document.querySelector('#hot');
    btnhot.addEventListener('click', function() {
        sectionhot.scrollIntoView({behavior:"smooth", block:"center"})
    })

    const btnall = document.querySelector('.all');
    const sectionall = document.querySelector('#all');
    btnall.addEventListener('click', function() {
        sectionall.scrollIntoView({behavior:"smooth", block:"center"})
    })

    const btncom = document.querySelector('.com');
    const sectioncom = document.querySelector('#com');
    btncom.addEventListener('click', function() {
        sectioncom.scrollIntoView({behavior:"smooth", block:"center"})
    })
    
    const arrowUp = document.querySelector('.arrow-up')

    arrowUp.addEventListener('click', function(){
        sectionrec.scrollIntoView({behavior:"smooth", block:"center"});
    });

    document.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            arrowUp.classList.add('show');
        } else {
            arrowUp.classList.remove('show');
        }
    })
