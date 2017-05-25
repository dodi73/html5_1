function bigSection() {
    var section1 = document.querySelector("#section1");

    if ( section1.classList.contains("big") ) {
        section1.classList.remove("big");
    } else {
        section1.classList.add("big");
    }

}/**
 * Created by toth8j on 2017. 05. 24..
 */
