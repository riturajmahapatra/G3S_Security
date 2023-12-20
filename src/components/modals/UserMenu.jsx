import React, { useCallback, useEffect, useState, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const dropdownRef = useRef(null)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const handleClickOutside = useCallback(
    (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    },
    [dropdownRef]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  // State to manage the modal's open/close state

  // Function to open the modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  // Function to close the modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }
  // Function to open the modal
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true)
  }

  // Function to close the modal
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false)
  }

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div onClick={openLoginModal}>Login/Register</div>
      {/* Pass closeModal as a prop to the Modal component */}
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} onRegisterClick={openRegisterModal} />
      )}
      {isRegisterModalOpen && (
        <RegisterModal onClose={closeRegisterModal} onLoginClick={openLoginModal} />
      )}
    </div>
  )
}

export default UserMenu
