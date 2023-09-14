import React from 'react'

export default function DesignDetail() {
  return (
    <div class="card design">
            <div id="backlink"><a>Back to previous screen</a></div>
            <div class="col80">
                <img class="designimg" />
                <div id="desc">
                    <h3>Design Name</h3>
                    <strong>Designer: </strong> <span>Deborah Designer</span>
                    <strong>Price:</strong> <span>$5000.00</span>
                    <button>Purchase</button>
                    <p>Nullam rutrum orci in lacus fringilla vehicula. Phasellus efficitur gravida enim, 
                    eget aliquet tortor interdum ac. Proin semper, turpis egestas laoreet ultricies, 
                    mi nunc feugiat risus, quis vestibulum arcu eros viverra nisl.</p>
                </div>
            </div>

            <div class="col40"></div>
        </div>
  )
}
