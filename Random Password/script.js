// Database قاعدة البيانات
const chars = [
    {numbers: "0123456789"},
     {letters_lowercase: "abcdefghijklmnopqrstuvwxyz"},
      {letters_uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
       {characters: "!$%&@#_()"}
    ]

// دالة generate

function generate() {
let randomPass = "";
let collection_one = chars[0]["numbers"];
let collection_two = chars[1]["letters_lowercase"];
let collection_three = chars[2]["letters_uppercase"];
let collection_four = chars[3]["characters"];
for(i=0;i<4; i++){
 randomPass = randomPass + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
 randomPass = randomPass + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
 randomPass = randomPass + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
 randomPass = randomPass + collection_four.charAt(Math.floor(Math.random() * collection_four.length));
}
//  randomPass = randomPass + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
//  randomPass = randomPass + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
//  randomPass = randomPass + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
//  randomPass = randomPass + collection_four.charAt(Math.floor(Math.random() * collection_four.length));

//  randomPass = randomPass + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
//  randomPass = randomPass + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
//  randomPass = randomPass + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
//  randomPass = randomPass + collection_four.charAt(Math.floor(Math.random() * collection_four.length));

//  randomPass = randomPass + collection_one.charAt(Math.floor(Math.random() * collection_one.length));
//  randomPass = randomPass + collection_two.charAt(Math.floor(Math.random() * collection_two.length));
//  randomPass = randomPass + collection_three.charAt(Math.floor(Math.random() * collection_three.length));
//  randomPass = randomPass + collection_four.charAt(Math.floor(Math.random() * collection_four.length));


display.value= randomPass;


}

generate();