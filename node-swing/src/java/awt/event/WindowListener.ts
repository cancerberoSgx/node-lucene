import { lang, util } from 'node-java-rt';
import { WindowEvent } from './WindowEvent';

export interface WindowListener extends util.EventListener {

  /**
   * Invoked the first time a window is made visible.
   */
  windowOpened(e: WindowEvent): void;

  /**
   * Invoked when the user attempts to close the window
   * from the window's system menu.
   */
  windowClosing(e: WindowEvent): void;

  /**
   * Invoked when a window has been closed as the result
   * of calling dispose on the window.
   */
  windowClosed(e: WindowEvent): void;

  /**
   * Invoked when a window is changed from a normal to a
   * minimized state. For many platforms, a minimized window
   * is displayed as the icon specified in the window's
   * iconImage property.
   * @see java.awt.Frame#setIconImage
   */
  windowIconified(e: WindowEvent): void;

  /**
   * Invoked when a window is changed from a minimized
   * to a normal state.
   */
  windowDeiconified(e: WindowEvent): void;

  /**
   * Invoked when the Window is set to be the active Window. Only a Frame or
   * a Dialog can be the active Window. The native windowing system may
   * denote the active Window or its children with special decorations, such
   * as a highlighted title bar. The active Window is always either the
   * focused Window, or the first Frame or Dialog that is an owner of the
   * focused Window.
   */
  windowActivated(e: WindowEvent): void;

  /**
   * Invoked when a Window is no longer the active Window. Only a Frame or a
   * Dialog can be the active Window. The native windowing system may denote
   * the active Window or its children with special decorations, such as a
   * highlighted title bar. The active Window is always either the focused
   * Window, or the first Frame or Dialog that is an owner of the focused
   * Window.
   */
  windowDeactivated(e: WindowEvent): void;
}