<template></template>
<script lang="ts" setup>
import { useQuery } from 'villus';

const { data, isFetching, error } = useQuery({
	query: FindManyActorDocument,
});
</script>
