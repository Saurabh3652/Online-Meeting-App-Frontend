import React from 'react'
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

export const CreateEvent = ({modal,toggle}) => {
  return (
    <div>
    <Button
      color="danger"
      onClick={function noRefCheck(){}}
    >
      Click Me
    </Button>
    <Modal
      isOpen={modal} toggle={toggle}
    >
      <ModalHeader toggle={function noRefCheck(){}}>
        Modal title
      </ModalHeader>
      <ModalBody>
        <form>
            <div className='form-group'>
                <label>Event Name</label>
                <input type="text" className='form-control' />
            </div>
            <div className="form-group">
                <label>Date scheduled</label>
                <input type="date" className='form-control' />
            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={function noRefCheck(){}}
        >
          Do Something
        </Button>
        {' '}
        <Button onClick={function noRefCheck(){}}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}
