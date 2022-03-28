const landing_card = document.getElementById("landing_card");
landing_card.addEventListener("animationed", landing_card_end_listener, false);
landing_card.addEventListener("click", landing_card_end_listener, false);

function landing_card_end_listener(event) {
    switch(event.type) {
        case "click":
            document.getElementById("landing_card_hint_text").className = "center_stage_hint_text_transition";
            document.getElementById("peek_business_card").className = "grow_business_card_transition";
            landing_card.className = "center_stage_business_card_transition";
            break;
    }
}