'use strict';

import FormgroupGeneral from '../formgroup-general';

describe('FormgroupGeneral View', function() {

  beforeEach(() => {
    this.formgroupGeneral = new FormgroupGeneral();
  });

  it('Should run a few assertions', () => {
    expect(this.formgroupGeneral).toBeDefined();
  });

});
