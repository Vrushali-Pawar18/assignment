const apiUrl = 'https://amz-reviews-rating-json.vercel.app/reviews';


function rotate() {
  if (document.getElementById("btn-ar").innerHTML == "v") {
    document.getElementById("btn-ar").innerHTML = "^";
  }
  else {
    document.getElementById("btn-ar").innerHTML = "v";
  }

}

//main code to fetch and display the data

function onPageLoad() {
  // Your code here
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(userData => {
      const asinNum = "B0BSV8TBVB";
      userData.forEach(asin => {
        if (asin.asin === asinNum) {
          console.log('Rating:', asin.summary.rating);
          document.getElementById("pr_rating").innerHTML = asin.summary.rating;



          //****************************************************************** */

          // asin.reviews.forEach(rev => {
          //   // console.log('Review:', rev);
          //   // console.log(asin.reviews.length);
          //   if (rev.profile && rev.profile.image) {
          //     console.log('Profile Image:', rev.profile.image);
          //     document.getElementById("img").src = rev.profile.image;
          //   }
          // });

          //******************************************************************************** */


          asin.reviews.forEach((rev) => {
            // if (rev.profile && rev.profile.image && rev.profile.name && rev.review_country && rev.title && rev.body && rev.date.raw && rev.rating) {
            // console.log('Profile name:', rev.profile.name, 'review_country:', rev.review_country);
            // console.log('Title:', rev.title);
            // console.log('Description:', rev.body);
            // console.log('Profile Image:', rev.profile.image);


            // const maxLength = 100; // Maximum length of truncated review body
            // let truncatedBody = rev.body;
            // if (truncatedBody.length > maxLength) {
            //   truncatedBody = truncatedBody.substring(0, maxLength) + '...'; // Truncate and add ellipsis
            // }

            // const dateStr = rev.date.raw;
            // const parts = dateStr.split("on");
            // const date = parts[1].trim(); // Trim to remove any leading or trailing whitespace
            // console.log('date:', date);
            // console.log('Rating:', rev.rating)


            let data1 = "";
            let data2 = "";
            let data3 = "";
            let data4 = [0, 0, 0, 0, 0];
            let data5 = "";
            let total = 0;
            let revRatingTotal = 0;

            asin.reviews.forEach((review) => {

              const maxLength = 100; // Maximum length of truncated review body
              let truncatedBody = review.body;
              if (truncatedBody.length > maxLength) {
                truncatedBody = truncatedBody.substring(0, maxLength) + '...'; // Truncate and add ellipsis
              }

              let dateStr = review.date.raw;
              let parts = dateStr.split("on");
              let date = parts[1].trim(); // Trim to remove any leading or trailing whitespace


              // if(review.profile.image === null){
              //    getElementById("user-img").src = review.profile.image;
              // }
              console.log(review.profile.image);
              var image = "C:\\Users\\Vrushali\\Documents\\Projects\\assignment\\UI_assignment\\images.jpg";
              if ((review.profile.image !== undefined)) {
                image = review.profile.image;
              }
              console.log(image);
              data1 += `
                <div class="img-add-rat d-flex" id="Customer1">
                    <div class="img-add-c" id="im-add">
                        <div class='img position-relative d-flex' id="User-img">
                            <img src=${image} id="img" alt="Rounded circle Image" class="rounded-circle" width='45'
                                height='45'>
                            <img src="amazon.png" alt="Amazon-img" class="rounded-circle align-self-end" id="amzn-img"
                                width="15" height="15">

                        </div>
                        </div>
                    <div class="name_add" id="n-ad">
                        <div class="name" id="name">
                            <h>${review.profile.name}</h>
                        </div>
                        <div class="col-sm" id="add">
                            <p>
                                ${review.review_country}
                            </p>
                        </div>
                    </div>
                    <div class="star-date-rev-desc " id="user">
                        <div class="star-date" id="data">
                            <div class="nstar" id="nstar">
                            <h class="bi bi-star-fill fs-6" id="filled-star"></h>
                            <h class="bi bi-star-fill fs-6" id="filled-star"></h>
                            <h class="bi bi-star-fill fs-6" id="filled-star"></h>
                            <h class="bi bi-star-fill fs-6" id="filled-star"></h>
                            <h class="bi empty fs-6" id="filled-star"></h>
                            </div>
                            <div class="date" id="date">
                                <h>
                                   ${date}
                                </h>
                            </div>
                        </div>
                        <div class="rev" id="rev-title1">
                            <h5>
                                ${review.title}
                            </h5>
                        </div>
                        <div class="rev2 d-flex" id="rev-title2">
                            <p>
                               ${truncatedBody}
                            </p>
                        </div>
                    </div>
                </div> 
                </div>`;

              data4[parseInt(review.rating) - 1]++;




            });


            total = asin.reviews.length;
            let rating = Math.round(parseFloat(asin.summary.rating));
            console.log(rating);
            //console.log(data4);
            for (let i = 0; i < 5; i++) {
              if (i < rating) {
                data3 += `<h class="bi bi-star-fill fs-3" id="filled-star"></h>`;
              } else {
                data3 += `<h class="bi empty fs-3" id="filled-star"></h>`;
              }
            }

            document.getElementById("reviews-container").innerHTML = data1;
            document.getElementById("all-rev").innerHTML = "(" + asin.reviews.length + ")";
            document.getElementById("filled-star-rat").innerHTML = data3;
            document.getElementById("progress-1").value = data4[0] * 100 / total;
            document.getElementById("progress-2").value = data4[1] * 100 / total;
            document.getElementById("progress-3").value = data4[2] * 100 / total;
            document.getElementById("progress-4").value = data4[3] * 100 / total;
            document.getElementById("progress-5").value = data4[4] * 100 / total;
            document.getElementById("rev-1").innerHTML = data4[0] + " Reviews";
            document.getElementById("rev-2").innerHTML = data4[1] + " Reviews";
            document.getElementById("rev-3").innerHTML = data4[2] + " Reviews";
            document.getElementById("rev-4").innerHTML = data4[3] + " Reviews";
            document.getElementById("rev-5").innerHTML = data4[4] + " Reviews";

           
            // let rev_rating = Math.round(parseFloat(review.rating));
            // console.log(rev_rating);

            for (let i = 0; i < 5; i++) {
              if (i < rev_rating) {
                data5 += `<h class="bi bi-star-fill fs-6" id="filled-star"></h>`;
              } else {
                data5 += `<h class="bi empty fs-6" id="empty-star"></h>`;
              }
            }

            console.log(data5); // Output the result

            document.getElementById("nstar").innerHTML = data5;




            //************************************************************************************************* */
            //*************************************************************************************************








































            //     // dynamic for each review
            //     const reviewContainer = document.getElementById("reviews-container");

            //     const reviewElement = document.createElement("div");
            //     reviewElement.classList.add("reviews-container");
            //     reviewElement.id = "reviews-container" + index; // Unique ID for each review

            //     const profileImage = document.createElement("img");
            //     profileImage.src = rev.profile.image;
            //     reviewElement.appendChild(profileImage);


            //     const profileName = document.createElement("h3");
            //     profileName.textContent = rev.profile.name;
            //     reviewElement.appendChild(profileName);

            //     const reviewCountry = document.createElement("p");
            //     reviewCountry.textContent = rev.review_country;
            //     reviewElement.appendChild(reviewCountry);

            //     const reviewTitle = document.createElement("h4");
            //     reviewTitle.textContent = rev.title;
            //     reviewElement.appendChild(reviewTitle);

            //     const reviewBody = document.createElement("p");
            //     reviewBody.textContent = truncatedBody;
            //     reviewElement.appendChild(reviewBody);

            //     const reviewDate = document.createElement("p");
            //     reviewDate.textContent = date;
            //     reviewElement.appendChild(reviewDate);

            //     reviewContainer.appendChild(reviewElement);

            //     console.log('******************************************************************************************');
            // }
          });



          // document.getElementById("name").innerHTML = rev.profile.name;
          // document.getElementById("img").src = rev.profile.image;
          // document.getElementById("add").innerHTML = rev.review_country;
          // document.getElementById("date").innerHTML = date;
          // document.getElementById("rev-title1").innerHTML = rev.title;
          // document.getElementById("rev-title2").innerHTML = truncatedBody;








          // asin.reviews.forEach(rev => {
          //   // console.log('Review:', rev);
          //   // console.log(asin.reviews.length);
          //   if (rev.profile && rev.profile.image && rev.profile.name && rev.review_country && rev.title && rev.body && rev.date.raw && rev.rating) {
          //     console.log('Profile name:', rev.profile.name, 'review_country:', '-------->', rev.review_country);
          //     console.log('Title:', rev.title);
          //     console.log('Description:', rev.body);
          //     console.log('Profile Image:', rev.profile.image);
          //     const maxLength = 100; // Maximum length of truncated review body
          //     let truncatedBody = rev.body;
          //     if (truncatedBody.length > maxLength) {
          //       truncatedBody = truncatedBody.substring(0, maxLength) + '...'; // Truncate and add ellipsis
          //     }

          //     const dateStr = rev.date.raw;
          //     const parts = dateStr.split("on");
          //     const date = parts[1].trim(); // Trim to remove any leading or trailing whitespace
          //     console.log('date:', date);
          //     console.log(rev.rating)


          //     document.getElementById("name").innerHTML = rev.profile.name;
          //     document.getElementById("img").src = rev.profile.image;
          //     document.getElementById("add").innerHTML = rev.review_country;
          //     document.getElementById("date").innerHTML = date;
          //     document.getElementById("rev-title1").innerHTML = rev.title;
          //     document.getElementById("rev-title2").innerHTML = truncatedBody;
          //     // document.getElementById("nstar").innerHTML=rev.rating;



          //     console.log('******************************************************************************************');
          //   }
          // });

          //************************************************************************************** */

          // asin.reviews.forEach(rev => {
          //    // console.log('Review:', rev);
          //    // console.log(asin.reviews.length);
          //    if (rev.review_country) {
          //      console.log('Profile name:', rev.review_country);
          //    }
          //  });

          //******************************************************************************************* */



        }
      })




    })
    .catch(error => {
      console.error('Error:', error);
    });

}

window.onload = onPageLoad;



