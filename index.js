const assignment_file = require("./amazonreviews_copy_2.json");
//1)

for(let asin of assignment_file.reviews){
    console.log( asin.asin, asin.reviews.length);
}
   

// //2)

// for(let asin of assignment_file.reviews){
//     for(let rev of asin.reviews){
//         if(rev.rating <= 2){
//             console.log(rev);
//         }
//     }
// }



// for(j=0; j<assignment_file.reviews.length; j++ ){
//     for(i=0; i<assignment_file.reviews[j].reviews.length; i++){
//         if(assignment_file.reviews[j].reviews[i].rating < 2){
//             console.log(assignment_file.reviews[j].reviews[i]);
//         }
//     }
// }





// //3)
// const r1 = [
//     {
//     "id": "R2GM5KKOVTH7E1",
//     "title": "Game-Changer for Sneaker Care On-The-Go",
//     "body": "As someone who values the appearance of their footwear, finding a solution that offers both convenience and effectiveness was a game-changer. These wipes have become my go-to for maintaining my sneaker collection, and here's why.  Firstly, the versatility of these wipes is impressive. They're designed to tackle various stains and dirt, ensuring my sneakers always look fresh. I've used them on different materials, from leather to suede, and the results are consistently satisfying. The dual-textured design is ingenious – one side for tough stains and the other for general cleaning. This thoughtful feature means I can address different levels of dirt with the same wipe.  The convenience factor is another major plus. The wipes are individually wrapped, which makes them perfect for on-the-go scenarios. I've stashed them in my car, backpack, and even my office drawer. Whether I'm traveling or just out for a day, having the ability to quickly clean up any unexpected scuffs or stains is invaluable.  Their effectiveness is not just a claim; it's a reality. I've been pleasantly surprised by how well these wipes remove dirt and stains without damaging the shoe material. They're gentle yet powerful, and I've seen them work wonders on some of my most stubborn marks.  Moreover, the Crep Protect brand has established itself as a leader in sneaker care, and these wipes are a testament to their innovation and understanding of what sneaker enthusiasts need. Their commitment to quality is evident in every wipe.  These wipes have become an essential part of my sneaker care routine. They're convenient, effective, and versatile – a trifecta that's hard to beat. For anyone who cherishes their sneaker collection, these wipes are a must-have. They keep your shoes looking spotless with minimal effort, ensuring you're always stepping out in style.",
//     "asin": "B00XN80O34",
//     "body_html": "<span>As someone who values the appearance of their footwear, finding a solution that offers both convenience and effectiveness was a game-changer. These wipes have become my go-to for maintaining my sneaker collection, and here's why.<br><br>Firstly, the versatility of these wipes is impressive. They're designed to tackle various stains and dirt, ensuring my sneakers always look fresh. I've used them on different materials, from leather to suede, and the results are consistently satisfying. The dual-textured design is ingenious – one side for tough stains and the other for general cleaning. This thoughtful feature means I can address different levels of dirt with the same wipe.<br><br>The convenience factor is another major plus. The wipes are individually wrapped, which makes them perfect for on-the-go scenarios. I've stashed them in my car, backpack, and even my office drawer. Whether I'm traveling or just out for a day, having the ability to quickly clean up any unexpected scuffs or stains is invaluable.<br><br>Their effectiveness is not just a claim; it's a reality. I've been pleasantly surprised by how well these wipes remove dirt and stains without damaging the shoe material. They're gentle yet powerful, and I've seen them work wonders on some of my most stubborn marks.<br><br>Moreover, the Crep Protect brand has established itself as a leader in sneaker care, and these wipes are a testament to their innovation and understanding of what sneaker enthusiasts need. Their commitment to quality is evident in every wipe.<br><br>These wipes have become an essential part of my sneaker care routine. They're convenient, effective, and versatile – a trifecta that's hard to beat. For anyone who cherishes their sneaker collection, these wipes are a must-have. They keep your shoes looking spotless with minimal effort, ensuring you're always stepping out in style.</span>",
//     "link": "https://www.amazon.com/gp/customer-reviews/R2GM5KKOVTH7E1/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B00XN80O34",
//     "rating": 5,
//     "date": {
//       "raw": "Reviewed in the United States on January 21, 2024",
//       "utc": "2024-01-21T00:00:00.000Z"
//     },
//     "profile": {
//       "name": "SneakerDadBod",
//       "link": "https://www.amazon.com/gp/profile/amzn1.account.AGEANRODIG4MG7FY62TM3LDJZEHA/ref=cm_cr_arp_d_gw_btm?ie=UTF8",
//       "id": "AGEANRODIG4MG7FY62TM3LDJZEHA",
//       "image": "https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/b2136635-0d91-455c-950f-a02d499feeb1._CR0,0,500,500_SX48_.jpg"
//     },
//     "vine_program": false,
//     "isAmazonReview": true,
//     "verified_purchase": true,
//     "review_country": "us",
//     "is_global_review": false,
//     "position": 1
//   },
//  {
//     "id": "R27OM7OX9VKEN1",
//     "title": "Great product",
//     "body": "It’s a very great product it’s definitely get the shoe very clean especially the width of the shoe but all around this is the ultimate shoe wipes",
//     "asin": "B00XN80O34",
//     "body_html": "<span>It’s a very great product it’s definitely get the shoe very clean especially the width of the shoe but all around this is the ultimate shoe wipes</span>",
//     "link": "https://www.amazon.com/gp/customer-reviews/R27OM7OX9VKEN1/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B00XN80O34",
//     "rating": 5,
//     "date": {
//       "raw": "Reviewed in the United States on December 15, 2022",
//       "utc": "2022-12-15T00:00:00.000Z" 
//     },
//     "profile": {
//       "name": "Carl",
//       "link": "https://www.amazon.com/gp/profile/amzn1.account.AETLEDSGKAN4M4PTSPJNS6SD2ECA/ref=cm_cr_arp_d_gw_btm?ie=UTF8",
//       "id": "AETLEDSGKAN4M4PTSPJNS6SD2ECA"
//     },
//     "vine_program": false,
//     "isAmazonReview": true,
//     "verified_purchase": true,
//     "review_country": "us",
//     "is_global_review": false,
//     "position": 2
//   }
// ];

// for(let asin of assignment_file.reviews){
//     if(asin.summary.rating > 4){
//         console.log(asin.reviews.concat(r1));
//     }
// }



// //4)
// for(let asin of assignment_file.reviews){
// let asin = assignment_file.reviews[4];

// for(i = asin.reviews.length - 1; i >= 0; --i) {
//     if(asin.reviews[i].rating < 3) {
//         //console.log(asin.reviews[i]);
//         asin.reviews.splice(i, 1);
//     }
// }

// for(i = 0; i < asin.reviews.length;) {
//     if(asin.reviews[i].rating < 2) {
//         //console.log(asin.reviews[i]);
//         asin.reviews.splice(i, 1);
//     } else {
//         ++i
//     }
// }

// }

// console.log(assignment_file.reviews);

// const FileSystem = require("fs");
//  FileSystem.writeFile('file.json', JSON.stringify(assignment_file), (error) => {
//     if (error) throw error;
//   });
// console.log(asin.reviews);


//************************************************************************************************** */

// //6)


//B07LD4GLKD


// const data2 = require("./amazonreviews_copy_2.json");
let i = 0;
// const data = require("./amazonreviews_copy_2.json");

const data2 = JSON.parse(JSON.stringify(assignment_file));
// console.log(clonedObject);
console.log(data2.reviews.length);
for(let asin of data2.reviews){
    if(asin.reviews.length === 100){
        // console.log(asin.asin);
        // console.log(data2.reviews.length);
        data2.reviews.splice(i,1);
        // console.log(data2.reviews.length);
        // console.log("-------------------------------------")

    }
    i++;
    // console.log(data2.reviews);
   
}
console.log(data2.reviews.length);
console.log("======");
console.log(assignment_file.reviews.length);


//*****************************************************************************************************************8 */
//*****************************************************************************************************************8 */
//*****************************************************************************************************************8 */


 //5) 

// function sortByDate(reviews1, reviews2 ){
//     console.log(new Date(reviews2.date.utc) - new Date(reviews1.date.utc));
//     return new Date(reviews2.date.utc) - new Date(reviews1.date.utc);
// }

// for(asin of assignment_file.reviews){

//     //let asin =  assignment_file.reviews[4];
//     let reviewsArray = asin.reviews;
//     for(dt of reviewsArray){
//         console.log(dt.date.utc);
//     }
//     reviewsArray.sort(sortByDate);
//     console.log(reviewsArray);
//     for(dt of reviewsArray){
//         console.log(dt.date.utc);
//     }

// }

//*********************************************************************** */

// for(asin of assignment_file.reviews){
//     // console.log(asin.reviews);
//             asin.reviews.sort(
//                 (asin1, asin2) => new Date(asin2.reviews.Date.utc) - new Date(asin1.reviews.Date.utc) )
//                 console.log(asin.reviews);
        
//     }
    


