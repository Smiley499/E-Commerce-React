import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import iqoo3 from './assets/iqoo 11 pro.jpg'
import iqoo2 from './assets/iqoo 11.jpg'
import iqoo4 from './assets/iqoo7.jpg'
import iqoo5 from './assets/iqoo 12.jpg'
import iqoo6 from './assets/iqoo 12.jpg'


const Iqoo = () => {
  return (
    <div className='containers'>
        <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {iqoo3} alt='image'  />
      <Card.Body>
        <Card.Text>
        <h4>IQOO 11 pro (128 gb) starlight</h4>
      <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>star star 5k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
    </Card>


     <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {iqoo2} alt='image'  />
      <Card.Body>
        <Card.Text>
        <h4>IQOO 11 (128 gb) starlight</h4>
      <h5>⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>8k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span>save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
    </Card> 

    <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {iqoo4} alt='image'  />
      <Card.Body>
        <Card.Text>
        <h4>IQOO 7 (64 gb) starlight</h4>
      <h5>⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>6k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {iqoo5} alt='image'  rounded  />
      <Card.Body>
        <Card.Text>
        <h4>IQOO 12 (128 gb) starlight</h4>
      <h5>⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>7k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span>save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
    </Card> 

     <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {iqoo6} alt='image'  />
      <Card.Body>
        <Card.Text>
        <h4>IQOO 12 pro (128 gb) starlight</h4>
      <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6> 5k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
    </Card> 


    </div>
  )
}

export default Iqoo
