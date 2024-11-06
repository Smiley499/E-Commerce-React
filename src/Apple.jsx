import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apple from './assets/apple.jpg'
import apple1 from './assets/apple12.jpg'
import apple2 from './assets/apple13.jpg'
import apple3 from './assets/apple14 plus.jpg'
import apple4 from './assets/oip.jpg'

const Apple = () => {
  return (
    <div className='containers '>
  
      <Card  style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {apple} alt='image' className='app'  />
      <Card.Body>
      <Card.Title></Card.Title>
        <Card.Text>
        <h4>Apple iphone11 (128) starlight</h4>
      <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>5k+ bought in past month</h6>
        <h6> $45,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">add to cart</Button>
      </Card.Body>
    </Card>
  
      <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {apple1} alt='image' />
      <Card.Body>
        <Card.Text>
        <h4>Apple iphone12 (128) starlight</h4>
      <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6> 9k+ bought in past month</h6>
        <h6> RS 45,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6> 
        </Card.Text>
        
        <Button variant="outline-success">add to cart</Button>
      </Card.Body>
    </Card>

  

    <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {apple2} alt='image' />
      <Card.Body>
         <Card.Text>
        <h4>Apple iphone13 (256 gb) starlight</h4>
      <h5>⭐⭐⭐⭐ <span>rating</span></h5>
      <h6> 8k+ bought in past month</h6>
        <h6> RS 54,499 M.R.P: RS59,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">add to cart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin:'0px 8px 0px 0px ' }}>
      <Card.Img variant="top" src= {apple4} alt='image' />
      <Card.Body>
         <Card.Text>
        <h4>Apple iphone11 (128) starlight</h4>
      <h5>⭐⭐⭐⭐ <span>rating</span></h5>
      <h6>7k+ bought in past month</h6>
        <h6> RS 35,489 M.R.P: RS49,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success">add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,margin:'0px 8px 0px 0px '}}>
      <Card.Img variant="top" src= {apple3} alt='image' />
      <Card.Body>
        <Card.Text>
        <h4>Apple iphone11 (128) starlight</h4>
      <h5>⭐⭐⭐⭐⭐ <span>rating</span></h5>
      <h6> 5k+ bought in past month</h6>
        <h6> RS 28,499 M.R.P: RS49,900 <br /><span>(24%off)</span> save extra with no cost emi <br />
         free delivery by amazon <hr />service: installation</h6>
         </Card.Text>
        <Button variant="outline-success
        ">add to cart</Button>
      </Card.Body>
    </Card>
    
  
       
    </div>
  )
}

export default Apple
