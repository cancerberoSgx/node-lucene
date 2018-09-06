import { Container as ContainerT } from './swing/Container'
import { JComponent as JComponentT } from './swing/JComponent'
import { JFrame as JFrameT } from './swing/JFrame'
import { JLabel as JLabelT } from './swing/JLabel'
import { SwingUtilities as SwingUtilitiesT } from './swing/SwingUtilities'

export namespace javax {
  export namespace swing {
    export type SwingUtilities = SwingUtilitiesT
    export type JLabel = JLabelT
    export type JFrame = JFrameT
    export type JComponent = JComponentT
    export type Container = ContainerT
  }
}
export const javax = {
  swing: {
    JFrame: JFrameT,
    JLabel: JLabelT,
    SwingUtilities: SwingUtilitiesT,
    Container: ContainerT,
    JComponent: JComponentT,
  }
}

