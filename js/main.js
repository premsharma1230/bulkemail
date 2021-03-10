//language//
$(document).ready(function(){
    $(".Lang_ag").click(function(){
        $("#Lng").fadeToggle("slow");
      });
      //--endd---//

      //--login
      $(".Login").click(function(){
        $("#Login_wrapper").fadeToggle("slow");
      });
      //end---//
      $(".UserPro").click(function(){
        $("#UserProfile_Wrapper").fadeToggle("slow");
      });
      //---//
      $(".Camp_i01").click(function(){
        $(".camp_list").fadeToggle();
      });
      $(".Mail_btn01").click(function(){
        $(".mail_show").fadeToggle("slow");
      });
      $(".F_li01").click(function(){
        $(".fa-check").fadeToggle("");
      });
      $(".Pencil01").click(function(){
        $(".Subject_line_popup").fadeToggle("slow");
      });
      // ----
      $(".temp_import").click(function(){
        $(".Template_import_wrp").fadeToggle("slow");
      });
      //----
        // ----
        $(".radio_btn1>p").click(function(){
          $(".Utc").css("display","none");
        });
        //----
       // ----
       $(".utc_hvr").click(function(){
        $(".Utc").fadeToggle("slow");
      });
      //----
        // ----
        $(".Check__P03").click(function(){
          $(".static_UnSb_page").fadeToggle("slow");
        });
        //----
           // ----
           $(".main-bar").click(function(){
            $(".ul01").fadeToggle("slow");
            $(".nav-item").fadeToggle("slow");
            // $(".CampL2").css("padding"," 0 !important");
          });
          
          $(".closebtn").click(function(){
            $(".ul01").fadeToggle("slow");
            $(".nav-item").fadeToggle("slow");
          });
          //----
          // ----
          $("#MailSelect").click(function(){
            $(".M_emails").fadeToggle("slow");
          });
          //----
      $(".Btn_sub").click(function(){
        $(".Info_list_Cmn_02 .selectMsg").fadeToggle("slow");
      $(".mail_show").css('display','none');
      });
    //---start---//
    $(".Filter").click(function(){
      $("#Search_form").fadeToggle("slow");
      $("#Setting-child,#Setting-child1,#Setting-child2").css('display','none');
    });
// ---setting---
     $(".setting").click(function(){
     $("#Setting-child").fadeToggle("slow");
     $("#Search_form").css('display','none');
     });
     $("#setting1").click(function(){
      $("#Setting-child1").fadeToggle("slow");
      $("#Setting-child2,#Search_form").css('display','none');
    });
    $("#setting2").click(function(){
      $("#Setting-child2").fadeToggle("slow");
      $("#Setting-child1,#Search_form").css('display','none');
    });
    //---//
  
    // ----end--here---
      // add & Remove class
      $(".List01").click(function () {
        if(!$(this).hasClass('List_active'))
        {    
            $(".List01.List_active").removeClass("List_active");
            $(this).addClass("List_active");        
        }
      });
      //  // add & Remove class
      //  $(".add1").click(function () {
      //   if(!$(this).hasClass('C_heading_active'))
      //   {    
      //       $(".add1.C_heading_active").removeClass("C_heading_active");
      //       $(this).addClass("List_active");        
      //   }
      // });
       // add & Remove class
       $(".Temp_cmn03").click(function () {
        if(!$(this).hasClass('temp_Active'))
        {    
            $(".Temp_cmn03.temp_Active").removeClass("temp_Active");
            $(this).addClass("temp_Active");        
        }
      });
       // add & Remove class
       $(".M_Li").click(function () {
        if(!$(this).hasClass('msg_Li_active'))
        {    
            $(".M_Li.msg_Li_active").removeClass("msg_Li_active");
            $(this).addClass("msg_Li_active");        
        }
      });
      //-----typing-----//
      $(".SubjectLine").on("input", function(){
        $("#searchValue").text($(this).val());
    });
      //---main---jquery--end--//
    });

    
    var handlePopup=event=>{
        if(event.currentTarget.nextElementSibling.style.display==="" || event.currentTarget.nextElementSibling.style.display==="block")
        { 
          event.currentTarget.nextElementSibling.style.display='none' 
        }
        else if(event.currentTarget.nextElementSibling.style.display==='none')
        {
          event.currentTarget.nextElementSibling.style.display='block';
        }
    }
//--end---here----//

function openList(ListName) {
  var i;
  var x = document.getElementsByClassName("List");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ListName).style.display = "block";  
}
//-----temp--list---//

function openTemp(ListName) {
  var i;
  var x = document.getElementsByClassName("Library_branch");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ListName).style.display = "block";  
}


//----msg-temp--list---//

function openMsgTemp(ListName) {
  var i;
  var x = document.getElementsByClassName("Msg_temp_Right");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ListName).style.display = "block";  
}

//bar 

jQuery('.main-bar').click(function(e) {
  jQuery(this).toggleClass('activefile');
  e.preventDefault();
  jQuery('.myHeader').slideToggle();
});




$(document).ready(function(){
  $('#goRight').on('click', function(){
    $('#slideBox').animate({
      'marginLeft' : '0'
    });
    $('.topLayer').animate({
      'marginLeft' : '100%'
    });
  });
  $('#goLeft').on('click', function(){
    if (window.innerWidth > 769){
      $('#slideBox').animate({
        'marginLeft' : '50%'
      });
    }
    else {
      $('#slideBox').animate({
        'marginLeft' : '20%'
      });
    }
    $('.topLayer').animate({
      'marginLeft': '0'
    });
  });
});


// ---Log---in---
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)




// -------nav---part----//
function openNav() {
  var sidebar =  document.querySelectorAll("#sidebar");
  var c2 = document.querySelectorAll(".CampL2");
  var sift  =    document.getElementById("Sift1");//.style.marginLeft = "250px";
    sidebar[0].style = "width:250px !important";
   // debugger
  //   c2.style.padding="2rem 0 0 1rem";
    sift.style ="margin-left :250px";
    
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  var sift  =  document.getElementById("Sift1");//.style.marginLeft= "13px";
  //    sift.style ="padding-top : 0rem !important";
     sift.style = "margin-left : 13px"
  }