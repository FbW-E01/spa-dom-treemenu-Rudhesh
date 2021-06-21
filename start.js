const tree = document.querySelector(".tree")
const span = document.createElement("span")

tree.append(span)


tree.addEventListener("click", (e) => {

    const elem = e.target.querySelector("*")
   


    // Toggle element visibility
    var toggle = function (elem) {

        // If the element is visible, hide it
        if (elem.style.display === 'none') {

            return elem.style.display = 'block';
        }

        return elem.style.display = 'none';

    };
    toggle(elem)

})