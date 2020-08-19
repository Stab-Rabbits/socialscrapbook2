import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Card } from 'react-bootstrap';
import { json } from "express";

export default function Invite(props) {
  const [show, setShow] = useState(true);

  const handleClickClose = () => setShow(false);
  const handleClickShow = () => setShow(true);
  
  // try to autofill? 
  // or get a list of all your friends and then see which to invite? Could add scroll bar with friends
    
  // "friendsFetchRes" is dummy for 'get' fetch to get your friends list from database
  let friendsFetchRes = ['friend1', 'friend2', 'friend3']

  // const handleClickInvite = () =>{
  // // send a 'post' fetch to the server with req.body containing the friend name 
  // // either remove friend from the inviteScrollContainer or change color of the invite button to green and say "invited"
  //   fetch('/api/invite')
  //     .then((data)=>{
  //       return data.json()
  //     })
  //     .then((data)=>{
  //       console.log(data)
  //     })
  // }

  const friendsList = friendsFetchRes.map((el, i)=>{
    return (
      <div key={i} className='inviteFriendContainer'>
        <span className='inviteFriendPhoto'>Photo</span>
        <span className='inviteFriendName'>{el}</span>
        <span className='inviteFriendButton'>
          <button onClick={handleClickInvite}>Invite</button>
        </span>
      </div>
    )
  })

  // need to create a div that holds all friends inside (probably use scroll bar)
  return (
    <div>
      {/* <div onClick={handleClickShow} onHide={handleClickClose} animation={true}>
        show invite
      </div> */}
      <Modal show={show}>
        <Modal.Body>
          <div className='inviteContainer'>
            <h1 id='inviteHeader'>Invite Friends to your Event</h1>
            <div className='inviteScrollContainer'>
              {friendsList}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClickClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
