import React, { useState, useEffect } from "react";

const AddItemForm = () => {
  const [dateAcquired, setDateAcquired] = useState("");
  const [purchasedPrice, setPurchasedPrice] = useState(0);
  const [itemNotes, setItemNotes] = useState("");
  const [itemCondition, setItemCondition] = useState("New");
  const [isTradeable, setIsTradeable] = useState(false);

  return (
    <div>
      <div>
        {/* <h1>This is Add Item</h1>

        <form>
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit">
            <i className="searchIcon">a button</i>
          </button>
        </form>

        <div>
          <h3>list of rendered item thumbnails</h3>
        </div>

        <br></br> */}

        <div>
          <span>Item form</span>
          <form>
            {/* date when item was bought */}
            <label htmlFor="dateAcquired">Date Acquired:</label>
            <input onChange={e => setDateAcquired(e.target.value)} type="date" id="start" value={dateAcquired}></input>
            <br></br>
            {/* price at purchase of item */}
            <label htmlFor="purchasedPrice">PurchasedPrice:</label>
            <input
              onChange={e => setPurchasedPrice(e.target.value)}
              id="purchasedPrice"
              type="number"
              min="0.01"
              step="0.01"
              value={purchasedPrice}
            />
            <br></br>

            {/* notes for user comments */}
            <label htmlFor="comment">Notes:</label>
            <textarea
              onChange={e => setItemNotes(e.target.value)}
              rows="4"
              cols="50"
              id="comment"
              value={itemNotes}
            ></textarea>
            <br></br>
            <label htmlFor="ItemCondition">Item Condition:</label>
            <select id="ItemCondition" value={itemCondition} onChange={(e) => setItemCondition(e.target.value)} >
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>

            <div>
              <label htmlFor="forTrade">tradeable</label>
              <input onChange={e => setIsTradeable(!isTradeable)} type="checkbox" id="forTrade" checked={isTradeable}></input>
            </div>
          </form>


        </div>

        <button onClick={() => window.print()}type="button">Submit</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
};

export default AddItemForm;
