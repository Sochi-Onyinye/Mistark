import React from 'react'

export function CategoryGridItem(props){
const {title, subtitle, onClick} = props
return (
<div class="col-3 card bg-success" onClick={onClick}>
<div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h6 class="card-subtitle mb-2">{subtitle}</h6>
    <p class="card-text">Details of this business category</p>
</div>
</div>)
}