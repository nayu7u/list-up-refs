let refs = document.querySelectorAll(".Link--primary.f4.text-bold.markdown-title")

let sidebar = document.querySelector("#partial-discussion-sidebar")
let sidebar_item = document.createElement("div")
sidebar_item.className = "discussion-sidebar-item"
let title = document.createElement("div")
title.className = "text-bold discussion-sidebar-heading"
let title_text = document.createTextNode("References")
title.appendChild(title_text)
sidebar_item.appendChild(title)

refs.forEach(function(element){
    let cloned_ref = element.closest("div.TimelineItem-body").cloneNode(true)
    sidebar_item.appendChild(cloned_ref)
    sidebar.appendChild(sidebar_item)
})