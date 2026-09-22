import { useState, useCallback } from 'react';

export interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: 'Male' | 'Female';
  size: 'Small' | 'Medium' | 'Large';
  location: string;
  imageUrl: string;
  isFavorite: boolean;
  tags: string[];
  status: 'Available' | 'Pending' | 'Adopted';
}

export interface Category {
  id: string;
  label: string;
  iconName: string;
}

const MOCK_CATEGORIES: Category[] = [
  { id: 'all', label: 'All', iconName: 'apps' },
  { id: 'dogs', label: 'Dogs', iconName: 'dog' },
  { id: 'cats', label: 'Cats', iconName: 'cat' },
  { id: 'rabbits', label: 'Rabbits', iconName: 'rabbit' },
  { id: 'others', label: 'Others', iconName: 'paw' },
];

const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: 'Max',
    breed: 'Golden Retriever',
    age: '1 year',
    gender: 'Male',
    size: 'Medium',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    isFavorite: false,
    tags: ['Friendly', 'Good with kids', 'Vaccinated'],
    status: 'Available',
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Domestic Shorthair',
    age: '6 months',
    gender: 'Female',
    size: 'Small',
    location: 'Chicago, IL',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    isFavorite: true,
    tags: ['Playful', 'House Trained'],
    status: 'Available',
  },
  {
    id: '3',
    name: 'Rocky',
    breed: 'Husky Mix',
    age: '2 years',
    gender: 'Male',
    size: 'Large',
    location: 'Austin, TX',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    isFavorite: false,
    tags: ['Energetic', 'Vaccinated'],
    status: 'Available',
  },
  {
    id: '4',
    name: 'Mochi',
    breed: 'Domestic Longhair',
    age: '1 year',
    gender: 'Female',
    size: 'Small',
    location: 'San Diego, CA',
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5',
    isFavorite: false,
    tags: ['Cuddly', 'Calm'],
    status: 'Available',
  },
];

export const useHomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [pets, setPets] = useState<Pet[]>(MOCK_PETS);
  const [isLoading, setIsLoading] = useState(false);

  // Filter pets based on selected category & search query
  const filteredPets = pets.filter((pet) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      pet.breed.toLowerCase().includes(selectedCategory.slice(0, -1)) ||
      (selectedCategory === 'dogs' && ['retriever', 'husky', 'dog'].some(k => pet.breed.toLowerCase().includes(k))) ||
      (selectedCategory === 'cats' && ['shorthair', 'longhair', 'cat'].some(k => pet.breed.toLowerCase().includes(k)));

    const matchesSearch =
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleToggleFavorite = useCallback((petId: string) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === petId ? { ...pet, isFavorite: !pet.isFavorite } : pet
      )
    );
  }, []);

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    // Simulating refresh delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    searchQuery,
    selectedCategory,
    categories: MOCK_CATEGORIES,
    pets: filteredPets,
    allPetsCount: pets.length,
    isLoading,
    handleCategorySelect,
    handleSearchChange,
    handleToggleFavorite,
    handleRefresh,
  };
};

export default useHomeScreen;
