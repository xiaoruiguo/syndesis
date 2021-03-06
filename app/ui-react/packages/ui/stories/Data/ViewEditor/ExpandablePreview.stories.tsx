import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ExpandablePreview } from '../../../src';

const stories = storiesOf('Data/ViewEditor/ExpandablePreview', module);

const queryResultsTableEmptyStateInfo =
  'Click Refresh button to re-submit the query.';
const queryResultsTableEmptyStateTitle = 'NO DATA AVAILABLE';

const resultCols = [
  { id: 'FirstName', label: 'First Name' },
  { id: 'LastName', label: 'Last Name' },
  { id: 'Country', label: 'Country' },
];

const resultRows = [
  ['Jean', 'Frissilla', 'Italy'],
  ['John', 'Johnson', 'US'],
  ['Juan', 'Bautista', 'Brazil'],
  ['Jordan', 'Dristol', 'Ontario'],
  ['Jenny', 'Clayton', 'US'],
  ['Jorge', 'Rivera', 'Mexico'],
  ['Jake', 'Klein', 'US'],
  ['Julia', 'Zhang', 'China'],
];

stories
  .add('collapsed', () => {
    return (
      <ExpandablePreview
        i18nEmptyResultsTitle={queryResultsTableEmptyStateTitle}
        i18nEmptyResultsMsg={queryResultsTableEmptyStateInfo}
        i18nHidePreview={'Hide Preview'}
        i18nLoadingQueryResults={'Loading query results...'}
        i18nRowTotalLabel={'Number of Rows:'}
        i18nShowPreview={'Show Preview'}
        i18nTitle={'Preview Results'}
        initialExpanded={false}
        isLoadingPreview={false}
        onPreviewExpandedChanged={action('expanded changed')}
        onRefreshResults={action('refresh results')}
        queryResultCols={resultCols}
        queryResultRows={resultRows}
      />
    );
  })

  .add('expanded, Preview with results loading', () => {
    return (
      <ExpandablePreview
        i18nEmptyResultsTitle={queryResultsTableEmptyStateTitle}
        i18nEmptyResultsMsg={queryResultsTableEmptyStateInfo}
        i18nHidePreview={'Hide Preview'}
        i18nLoadingQueryResults={'Loading query results...'}
        i18nRowTotalLabel={'Number of Rows:'}
        i18nShowPreview={'Show Preview'}
        i18nTitle={'Preview Results'}
        initialExpanded={true}
        isLoadingPreview={true}
        onPreviewExpandedChanged={action('expanded changed')}
        onRefreshResults={action('refresh results')}
        queryResultCols={resultCols}
        queryResultRows={resultRows}
      />
    );
  })

  .add('expanded, Preview with results', () => {
    return (
      <ExpandablePreview
        i18nEmptyResultsTitle={queryResultsTableEmptyStateTitle}
        i18nEmptyResultsMsg={queryResultsTableEmptyStateInfo}
        i18nHidePreview={'Hide Preview'}
        i18nLoadingQueryResults={'Loading query results...'}
        i18nRowTotalLabel={'Number of Rows:'}
        i18nShowPreview={'Show Preview'}
        i18nTitle={'Preview Results'}
        initialExpanded={true}
        isLoadingPreview={false}
        onPreviewExpandedChanged={action('expanded changed')}
        onRefreshResults={action('refresh results')}
        queryResultCols={resultCols}
        queryResultRows={resultRows}
      />
    );
  })

  .add('expanded, Preview no results', () => {
    return (
      <ExpandablePreview
        i18nEmptyResultsTitle={queryResultsTableEmptyStateTitle}
        i18nEmptyResultsMsg={queryResultsTableEmptyStateInfo}
        i18nHidePreview={'Hide Preview'}
        i18nLoadingQueryResults={'Loading query results...'}
        i18nRowTotalLabel={'Number of Rows:'}
        i18nShowPreview={'Show Preview'}
        i18nTitle={'Preview Results'}
        initialExpanded={true}
        isLoadingPreview={false}
        onPreviewExpandedChanged={action('expanded changed')}
        onRefreshResults={action('refresh results')}
        queryResultCols={[]}
        queryResultRows={[]}
      />
    );
  });
