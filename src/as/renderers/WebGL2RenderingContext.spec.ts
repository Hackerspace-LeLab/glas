/**
 * @author Kara Rawson / rawsonkara@gmail.com
 */

import { WebGL2RenderingContext } from "./WebGL2RenderingContext";

/**
 * Test class used to verify that we have the WebGL2RenderingContext placeholder
 * within GLAS. This will be replaced with the real WebGLRenderingContext class.
 */
describe('Renderers', () => {
   test('WebGL2RenderingContext_', (): void => {
      var context: WebGL2RenderingContext = new WebGL2RenderingContext()
      expect(context.context).toBe(2,
         "Make sure we are using version 2.x of WebGL in the 'WebGL2RenderingContext' class")
   })
})