import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from 'types/portal-config'
import loadingScreen from '../loadingScreen'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import facetAliases from '../facetAliases'
export const publicationSql = 'SELECT * FROM syn21868591'
export const publicationEntityId = 'syn21868591'
const entityId = publicationEntityId
const sql = publicationSql
const unitDescription = 'Publications'
const rgbIndex = 1

export const publicationSchema: GenericCardSchema = {
  type: SynapseConstants.PUBLICATION,
  title: 'publicationTitle',
  subTitle: 'authors',
  secondaryLabels: [
    'pubMedLink',
    'journal',
    'publicationYear',
    'theme',
    'tumorType',
    'tissue',
    'assay',
    'keywords',
    'doi',
    'grantName',
    'consortium',
    'dataset',
  ],
}

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: publicationSchema,
  loadingScreen,
  secondaryLabelLimit: 5,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'publicationTitle',
    matchColumnName: 'publicationTitle',
    baseURL: 'Explore/Publications/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'pubMedLink',
    },
    {
      isMarkdown: false,
      baseURL: 'Explore/Grants/DetailsPage',
      matchColumnName: 'grantName',
      URLColumnName: 'grantName',
    },
    {
      isMarkdown: false,
      baseURL: 'Explore/Datasets/DetailsPage',
      URLColumnName: 'datasetAlias',
      matchColumnName: 'dataset',
    },
  ],
}

export const publications: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      rgbIndex,
      unitDescription,
      loadingScreen,
      facet: 'theme',
      link: 'Explore/Publications',
      linkText: 'Explore Publications',
      initQueryRequest: {
        entityId,
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
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      entityId,
      cardConfiguration: publicationsCardConfiguration,
      sql,
      shouldDeepLink: true,
      name: 'Publications',
      loadingScreen,
      facetAliases,
      searchConfiguration: {
        searchable: [
          {
            columnName: 'publicationTitle',
            hintText: 'methylation',
          },
          {
            columnName: 'authors',
            hintText: 'LastName',
          },
          {
            columnName: 'journal',
            hintText: 'Nucleic Acids Res',
          },
          {
            columnName: 'doi',
            hintText: '10.1158/2159-8290.CD-17-0222',
          },
          {
            columnName: 'pubMedId',
            hintText: '28053997',
          },
          {
            columnName: 'keywords',
            hintText: 'scRNA-seq',
          },
          {
            columnName: 'tummorType',
            hintText: 'Skin Cutaneous Melanoma',
          },
          {
            columnName: 'tissue',
            hintText: 'Prostate gland',
          },
          {
            columnName: 'assay',
            hintText: 'RNA-seq',
          },
          {
            columnName: 'grantName',
            hintText: 'immunity',
          },
          {
            columnName: 'grantNumber',
            hintText: 'CA202123',
          },
          {
            columnName: 'dataset',
            hintText: 'PRJNA312905',
          },
        ],
      },
    },
  },
}
