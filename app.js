'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

$(document).ready(function() {
    $("#R1F,#R1T").hide();
    $("#R2F,#R2T").hide();
    $("#R3F,#R3T").hide();
    $("#R4F,#R4T").hide();
    $("#gerudospan, #goronspan, #zoraspan, #piafspan").hide();
    $(".light").hide();
    $(".not_hiding").hide();
    $(".col-1 .btn").click(function() {
        $(".p").toggle();
        $(".dark").toggle();
        $(".light").toggle();
    });
    $(".col-7 .btn").click(function() {
        if ($("#Q1").val() == "2") {
            $("#R1T").show();
            $("#R1F").hide();
        } else {
            $("#R1F").show();
            $("#R1T").hide();
        }
        if ($("#Q2").val() == "4") {
            $("#R2T").show();
            $("#R2F").hide();
        } else {
            $("#R2F").show();
            $("#R2T").hide();
        }
        if ($("#Q3").val() == "1") {
            $("#R3T").show();
            $("#R3F").hide();
        } else {
            $("#R3F").show();
            $("#R3T").hide();
        }
        if ($("#Q4").val() == "3") {
            $("#R4T").show();
            $("#R4F").hide();
        } else {
            $("#R4F").show();
            $("#R4T").hide();
        }
        if ($("#R1T").is(":visible") && $("#R2T").is(":visible") && $("#R3T").is(":visible") && $("#R4T").is(":visible")) {
            $(".hiding").hide();
            $(".not_hiding").show();
            $(".modal-body").html("Vous avez repondue correctement à toutes les questions, vous avez donc débloqué la partie bonus !");
            $("#exampleModalLabel").html("Félicitations !");
        } else {
            $(".hiding").show();
            $(".not_hiding").hide();
            $(".modal-body").html("Vous n'avez pas répondu correctement à toutes les questions, vous n'avez donc pas débloqué la partie bonus !");
            $("#exampleModalLabel").html("Dommage !");
        }
    });
    $("#gerudo").hover(function() {
        $("#gerudospan").show();
    });
    $("#gerudo").mouseleave(function() {
        $("#gerudospan").hide();
    });
    $("#goron").hover(function() {
        $("#goronspan").show();
    });
    $("#goron").mouseleave(function() {
        $("#goronspan").hide();
    });
    $("#zora").hover(function() {
        $("#zoraspan").show();
    });
    $("#zora").mouseleave(function() {
        $("#zoraspan").hide();
    });
    $("#piaf").hover(function() {
        $("#piafspan").show();
    });
    $("#piaf").mouseleave(function() {
        $("#piafspan").hide();
    });
    $("#fini2").click(function() {
        var boutonsRadio = $('input[type="radio"][name="options-outlined"]');


        boutonsRadio.each(function() {
        if ($(this).is(":checked")) {
            if ($(this).attr("id") == "btn-check-outlined3") {
                $("#fin").attr("src", "final_win.png");
            }
        }
        });
    });
});