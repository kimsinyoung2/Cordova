// window.Kakao.init("f372643d96cc90e356e0859d5a3d42b7");

function executeWithoutKakaoLogin() {
    var header = document.getElementById("header");
    var visi = document.getElementById("visi");
    var card2 = document.getElementById("card2");
  
    // Remove or comment out the Kakao login-related code
    // window.Kakao.Auth.login({
    //   scope: "profile_nickname, profile_image",
    //   success: function (authObj) {
    //     console.log(authObj);
    //     window.Kakao.API.request({
    //       url: "/v2/user/me",
    //       success: (res) => {
    //         const kakao_account = res.kakao_account;
    //         console.log(kakao_account);
    //         visi.style.display = "none";
  
    fetch("info.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      //body: JSON.stringify({id}),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        header.classList.remove("none");
        card2.classList.remove("none");
        console.log(res);
        res.forEach((item, i) => {
          if (i > 0) {
            let template = `
                 
                <div class="card ">
                    <br>
                    <div>
                        &nbsp
                        <img src=${item.icon} class="icon">&nbsp
                        <span>${item.subtitle}</span>
                    </div>
                    <h4>
                        &nbsp&nbsp
                        ${item.title}
                    </h4>
                    <p class="gray">
                        &nbsp
                        ${item.tag}
                    </p>
                </div>`;
            document
              .getElementById("box")
              .insertAdjacentHTML("beforeEnd", template);
          }
        });
      })
      .catch((err) => console.log(err.message));
    //       },
    //     });
    //   },
    // });
  }
  
  // Call the function when needed
  executeWithoutKakaoLogin();
  