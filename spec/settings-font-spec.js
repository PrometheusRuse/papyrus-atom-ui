'use babel';
'use strict';

describe('AMU Font Options', () => {
    beforeEach(() => {
        this.workspace = atom.views.getView(atom.workspace);
        jasmine.attachToDOM(this.workspace);

        waitsForPromise('Theme Activation', () => {
            return atom.packages.activatePackage('papyrus-ui');
        });
    });

    it('should be able to scale UI via font-size', () => {
        atom.config.set('papyrus-ui.fonts.fontSize', '18');
        expect(atom.config.get('papyrus-ui.fonts.fontSize')).toBe(18);

        atom.config.set('papyrus-ui.fonts.fontSize', '16');
        expect(atom.config.get('papyrus-ui.fonts.fontSize')).toBe(16);
    });
});
