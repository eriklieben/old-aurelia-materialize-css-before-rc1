import {configure} from '../../src/index';
import MaterializeCssOptions from "../../src/index";

class ConfigStub {

  private resources: Array<string> = [];

  globalResources(resources) {
    this.resources = resources;
  }
}

describe('the Aurelia Materialize CSS configuration with the option enableAttributes true', () => {
  let mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    let options = new MaterializeCssOptions();
    options.enableAttributes = true;
    options.enableElements = false;
    configure(mockedConfiguration, options);
  });
});

describe('the Aurelia Materialize CSS configuration with the option enableAttributes false', () => {
  var mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    let options = new MaterializeCssOptions();
    options.enableAttributes = false;
    configure(mockedConfiguration, options);
  });
});

describe('the Aurelia Materialize CSS configuration with the option enableElements true', () => {
  var mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    let options = new MaterializeCssOptions();
    options.enableElements = true;
    configure(mockedConfiguration, options);
  });
});

describe('the Aurelia Materialize CSS configuration with the option enableElements false', () => {
  var mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    let options = new MaterializeCssOptions();
    options.enableElements = false;
    configure(mockedConfiguration, options);
  });
});
