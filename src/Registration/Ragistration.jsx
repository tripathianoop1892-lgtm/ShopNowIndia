import "./Ragistration.css"
function Ragistration(){
    return(
        
        <div id="Name">
            <h1>Shop keepar Registration </h1>
            <form>
                <div id="form1">
                    <label htmlFor="inp1"> <h2>Shop Name</h2></label>
                    <input type="text" placeholder="Enter your name" id="inp1"/>
                </div>
            </form>
            <form>
                <div id="form2">
                    <label htmlFor="inp2"> <h2>Owner Name</h2></label>
                    <input type="text" placeholder="Enter your name" id="inp2"/>
                </div>
            </form>
            <form>
                <div id="form3">
                    <label htmlFor="inp3"> <h2>Mobile Number</h2></label>
                    <input type="text" placeholder="Enter your Mob.Number" id="inp3"/>
                </div>
                 
            </form>
            <form>
                <div id="form4">
                <label htmlFor="inp4"><h2>Shop Address</h2></label>
                <input type="text"placeholder="Enter your Address" id="inp4"/>
                </div>
                <div id="city">
                    <label htmlFor="imp5"><h3>City</h3></label>
                    <input type="text"placeholder="Enter your city"id="imp5" />
                    <label htmlFor="imp5"><h3>State</h3></label>
                    <input type="text"placeholder="Enter your State"id="imp5" />
                     <label htmlFor="imp5"><h3>Pin Code</h3></label>
                    <input type="text"placeholder="Enter your Pin Code"id="imp5" />
                </div>
                    
                
                
            </form>
            <form>
                <div>
                    <select>
                        <option value="">Select Delivery</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
            </form>
                <div>
                <h2>Shop Category</h2>
                <select >
                <option value="">Select Category</option>
                <option value="Grocery">Grocery</option>
                <option value="Medical">Medical</option>
                <option value="Dairy Product">Dairy Products</option>
                <option value="Cosmetic">Cosmetics</option>
                <option value="House hold Product">Household Products</option>
                <option value="Electronics">Electronics</option>
                <option value="Stationary">Stationery</option>
                <option value="Bakery">Bakery</option>
                </select>
                </div>
                <div id="CreateShop">

                    <button>Create Shop</button>
                </div>
            </div>
    )
}
export default Ragistration