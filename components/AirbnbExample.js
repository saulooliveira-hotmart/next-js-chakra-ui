// Sample card from Airbnb
import { Badge, Box, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function AirbnbExample() {
  const property = {
    baths: 2,
    beds: 3,
    formattedPrice: '$1,900.00',
    imageAlt: 'Rear view of modern home with pool',
    imageUrl: 'https://bit.ly/2Z4KKcF',
    rating: 3,
    reviewCount: 34,
    title: 'Modern home in city center in the heart of historic Los Angeles',
  };

  return (
    <Box
      borderRadius="lg"
      borderWidth="1px"
      maxW="sm"
      overflow="hidden"
    >
      <Image
        alt={property.imageAlt}
        src={property.imageUrl}
      />

      <Box p="6">
        <Box
          alignItems="baseline"
          d="flex"
        >
          <Badge
            borderRadius="full"
            colorScheme="teal"
            px="2"
          >
            New
          </Badge>

          <Box
            color="gray.500"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            ml="2"
            textTransform="uppercase"
          >
            {property.beds}
            {' '}
            beds &bull;
            {property.baths}
            {' '}
            baths
          </Box>
        </Box>

        <Box
          as="h4"
          fontWeight="semibold"
          isTruncated
          lineHeight="tight"
          mt="1"
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}

          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
          >
            / wk
          </Box>
        </Box>

        <Box
          alignItems="center"
          d="flex"
          mt="2"
        >
          {Array(5)
            .fill('')
            .map((na, item) => (
              <StarIcon
                color={item < property.rating
                  ? 'teal.500'
                  : 'gray.300'}
                key={item}
              />
            ))}

          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
            ml="2"
          >
            {property.reviewCount}
            {' '}
            reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AirbnbExample;
