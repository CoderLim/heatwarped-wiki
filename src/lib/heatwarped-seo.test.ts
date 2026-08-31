import assert from 'node:assert/strict';
import test from 'node:test';

import { heatwarpedPathKey } from './heatwarped-seo';

test('normalizes empty and trailing-slash route paths', () => {
  assert.equal(heatwarpedPathKey(''), '/');
  assert.equal(heatwarpedPathKey('/'), '/');
  assert.equal(heatwarpedPathKey('/demo/'), '/demo');
  assert.equal(heatwarpedPathKey('/blog/example/'), '/blog/example');
});
