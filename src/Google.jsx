import React from 'react'
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pixel from './assets/pixel 6.jpg'
import pixel1 from './assets/pixel 7 pro.jpg'
import pixel2 from './assets/pixel 8 pro.jpg'
import pixel3 from './assets/pixel 10 pro.jpg'
import pixel4 from './assets/pixel 6.jpg'

const Google = () => {
  return (
    <div className='containers'>
       <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {pixel} alt='image'  />
      <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text>
        <h4>Google pixel 6 (128) starlight</h4>
        <h5>⭐⭐⭐⭐ <span>rating</span></h5>
      <h6> 5k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
     </Card>
     <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {pixel1} alt='image'  />
      <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text>
        <h4>Google pixel 7pro (128) starlight</h4>
        <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>28k+ bought in past month</h6>
        <h6> RS 75,499 M.R.P: RS89,900 <br /><span>(24%off)</span>save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
     </Card>
     <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {pixel2} alt='image'  />
      <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text>
        <h4>Google pixel 8 pro (128) starlight</h4>
        <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>24k+ bought in past month</h6>
        <h6> RS 85,499 M.R.P: RS98,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body> 
     </Card>
     <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {pixel3} alt='image'  />
      <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text>
        <h4>Google pixel 10 pro (256 GB) starlight</h4>
        <h5>⭐⭐⭐⭐<span>rating</span></h5>
      <h6>22k+ bought in past month</h6>
        <h6> RS 96,499 M.R.P: RS109,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
     </Card>
      <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {pixel4} alt='image'  />
      <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text>
        <h4>Google pixel6 pro (128) starlight</h4>
        <h5>⭐⭐⭐⭐<span>rating</span></h5>
      <h6>star star 5k+ bought in past month</h6>
        <h6> RS 45,499 m.r.p: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">Add To Cart</Button>
      </Card.Body>
     </Card> 
    </div>
  )
}

export default Google