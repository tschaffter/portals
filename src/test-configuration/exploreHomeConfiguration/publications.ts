import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import { HomeExploreConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'

const sql = 'SELECT * FROM syn10923842'
const unitDescription = 'Publications'
const rgbIndex = 0
const facet = 'Theme'
const publicationSchema: GenericCardSchema = {
  type: 'Project',
  title: 'Title',
  subTitle: 'Authors',
  description: 'abstract',
  secondaryLabels: ['Journal'],
  link: 'PubMed',
}
export const publications: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      rgbIndex,
      facet,
      unitDescription,
      initQueryRequest: {
        entityId: 'syn10923842',
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
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
    name: 'QueryWrapperMenu',
    props: {
      unitDescription,
      entityId: 'syn10923842',
      stackedBarChartConfiguration: {
        loadingScreen,
      },
      name: 'Publications',
      cardConfiguration: {
        type: SynapseConstants.GENERIC_CARD,
        genericCardSchema: publicationSchema,
      },
      menuConfig: [
        {
          sql,
          facet: 'Theme',
        },
        {
          sql,
          facet: 'diseaseType',
        },
      ],
      rgbIndex: 1,
    },
  },
}
