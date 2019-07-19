import React from 'react'
import { render } from 'enzyme'
import { Commit } from './Commit'
import assert from "assert";

describe('Commit', () => {
    it('switch color of bg to yellow with last digit in hash', () => {
        const props = {
            data: {
                sha: "000000000000000000000000000000",
                commit: {
                    message: "test",
                    author: {
                        date: (new Date()).toISOString()
                    }
                }
            },
        };

        const wrapper = render(<Commit {...props} />);
        assert.strictEqual(wrapper.prop("style")["background-color"], "yellow");
    })

    it('do NOT switch color of bg to yellow with last digit in hash', () => {
        const props = {
            data: {
                sha: "00000000000000000000000000000e",
                commit: {
                    message: "test",
                    author: {
                        date: (new Date()).toISOString()
                    }
                }
            },
        };

        const wrapper = render(<Commit {...props} />);
        assert.notEqual(wrapper.prop("style")["background-color"], "yellow");
    })
});