import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from 'types/portal-config'
import loadingScreen from '../loadingScreen'
import {
  GenericCardSchema,
  IconOptions,
} from 'synapse-react-client/dist/containers/GenericCard'
import { Project } from 'synapse-react-client/dist/assets/themed_icons/Project'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
export const grantsSql = `SELECT * FROM syn21918972`
const sql = grantsSql
export const grantsEntityId = 'syn21918972'
const entityId = grantsEntityId
const unitDescription = 'Grants'
const rgbIndex = 3

export const grantsSchema: GenericCardSchema = {
  type: 'Grant',
  title: 'grantName',
  subTitle: 'grantInstitution',
  description: 'abstract',
  secondaryLabels: [
    'investigator',
    'grantNumber',
    'consortium',
    'grantType',
    'theme',
  ],
}

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: (Project as unknown) as string,
}

export const grantsCardConfiguration: CardConfiguration = {
  genericCardSchema: grantsSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'grantId',
    matchColumnName: 'grantId',
    baseURL: 'Explore/Grants/DetailsPage',
  },
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
}

export const grants: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      unitDescription,
      loadingScreen,
      rgbIndex: 3,
      facet: 'grantType',
      link: 'Explore/Grants',
      linkText: 'Explore Grants',
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId,
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql,
          limit: 25,
          offset: 0,
        },
      },
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      sql,
      cardConfiguration: grantsCardConfiguration,
      shouldDeepLink: true,
      name: 'Grants',
      loadingScreen,
      entityId,
      facetsToPlot: ['consortium', 'grantType'],
      searchConfiguration: {
        searchable: [
          {
            columnName: 'grantName',
            hintText: 'immunity',
          },
          {
            columnName: 'abstract',
            hintText: 'metastasis',
          },
          {
            columnName: 'grantInstitution',
            hintText: 'Vanderbilt',
          },
          {
            columnName: 'investigator',
            hintText: 'LastName',
          },
          {
            columnName: 'grantNumber',
            hintText: 'CA202123',
          },
        ],
      },
    },
  },
}
