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
for (var i = 0; i < 5; i++) {
 document.querySelectorAll("button")[i].addEventListener("click", function(){
  document.querySelector("h1").style.color = "purple"
 });
}

// //