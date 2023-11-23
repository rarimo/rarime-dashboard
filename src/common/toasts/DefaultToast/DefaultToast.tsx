import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

import { FC, HTMLAttributes, useMemo } from 'react'

import { Icon } from '@/common'
import { IconNames } from '@/enums'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string
  message: string
  iconName?: IconNames
}

const DefaultToast: FC<Props> = ({ title, message, iconName, ...rest }) => {
  const toastIcon = useMemo(() => iconName || IconNames.checkCircle, [iconName])

  return (
    <div className='default-toast__body' {...rest}>
      <div className='default-toast__icon-wrp'>
        {toastIcon && <Icon className='default-toast__icon' name={toastIcon} />}
      </div>
      <div className='default-toast__details'>
        <h4 className='default-toast__title'>{title}</h4>
        <p className='default-toast__message'>{message}</p>
      </div>
    </div>
  )
}

export default DefaultToast
