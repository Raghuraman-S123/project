import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddDesign() {
  return (
    <div class="card design">
        <div id="backlink"><a>Back to previous screen</a></div>
        <div class="col80">
            <img class="designimg" />
            <div id="desc">
                <form id="design-details">
                    <label for="design-title">Design Title:</label>
                    <input id="design-title" type="text" />

                    <label for="design-description">Description:</label>
                    <textarea id="design-description"></textarea>

                    <label for="design-price">Price: </label>
                    <input id="design-price" type="text" />
                </form>
            </div>
        </div>
    </div>
  )
}
