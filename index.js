// $('h1').text('Bye')

// $('button').html('<em>Hey</em>')

// document.querySelector("h1");
// document.querySelectorAll("button");
// ile
// $("h1")
// $('button')
// aynı şeyi çalıştırır

// H1'in rengini değiştirme //
// $("h1").css("color", "green");

// h1'in rengini rgb olarak gösterme //
// console.log($('h1').css('color'))

// h1'in font boyutunu px olarak gösterme //
// console.log($('h1').css('font-size'))

// h1'in fontunu 5rem olarak değiştirme //
// $('h1').css('font-size', '5rem')

// Class Ekleme //
// $('h1').addClass('big-title');
// Class Silme //
// $('h1').removeClass('big-title')

//Class'ın işlendiğini anlamak için ;
// $('h1').hasClass('margin-50')

// Birden fazla class tanımlamak için //
// $('h1').addClass('big-title margin-50')

// Elementin yazısını değiştirmek için //
// $("h1").text("Bye");

// Text ismini HTML şeklinde değiştirmek için //
// $('button').html('<em>Hey</em>')




// 29.07.2022




// Elemanın değerini almak ve değiştirmek için .attr //
// console.log($("img").attr("src"));

// a Elemanının değerini değiştirmek için //
// $('a').attr('href', 'https://yahoo.com')

// Eleman'ın üzerindeki class'ları sorgulamak için //
// $('h1').attr('class')
// 'big-title margin-50'


// Function ile yazı rengi değiştirme //
// $("h1").click(function(){
//  $("h1").css("color", "purple");
// })



// Button sayısını tespit etme ve sonrasında tıklandığın h1 rengini değiştirme //
// for (var i = 0; i < 5; i++) {
//  document.querySelectorAll("button")[i].addEventListener("click", function(){
//   document.querySelector("h1").style.color = "purple"
//  });
// }

// Aynısını JQuery ile yapmak için ; 

// $("button").click(function(){
//  $("h1").css("color", "purple");
// });



// input kısmına girilen değerleri tek tek consol'da gösterme //
// $("input").keypress(function(e){
//  console.log(e.key);
// });


// Sayfa üzerinde klavyede tıklanan tuşları gösterme //
// $(document).keypress(function (e) {
//   console.log(e.key)
// })


// Sayfa üzerinde klavyede tıklanan tuşları h1 değerini değiştirerek gösterme //
// $(document).keypress(function (e) {
//   $("h1").text(e.key);
// })


// Mouse ile H1'in üzerine gelince renk değiştirmesi //
// mouse eventlerine bak mouseover, click mouseout ... //

// $("h1").on("mouseover", function () {
//  $("h1").css("color", "purple");
// })

// $('h1').on('click', function () {
//   $('h1').css('color', 'purple')
// })


// JQuery ile istenilen elemanı ekrana ekleme // 
// $('h1').before('<button>New</button>') // Önce
// $('h1').after('<button>New</button>') // Sonra
// $('h1').prepend('<button>New</button>') // Sol hiza
// $('h1').append('<button>New</button>') // Sağ Hiza


// $('h1').append('<button>New</button>') // Sağ Hiza
// aynı görevi şu şekilde yapabiliriz
// $('h1').after('<h1><button>New</button>Hello</h1>')


// Belirtilen elemanı silmek için //
// $("button").remove();


